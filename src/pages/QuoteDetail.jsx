import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlitedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'


const QuoteDetail = () => {
    const match = useRouteMatch()
    const params = useParams();
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)
    const { quoteId } = params

    useEffect(() =>{
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if(status === 'pending'){
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if(error){
        return <p className="centered">{error}</p>
    }
    
    if (!loadedQuote.text) {
        return <p>No Quote Found!</p>;
    }


    return (
        <>
            <HighlitedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                        Load comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
