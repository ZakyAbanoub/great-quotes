import { useEffect } from 'react';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const {sendRequest, status } = useHttp(addQuote)
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData)
    };
    return (
        <Fragment>
            <QuoteForm isLoading={status === 'pending'}  onAddQuote={addQuoteHandler} />
        </Fragment>
    );
};

export default NewQuote;