import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList'
import useHttp from '../../hooks/use-http';
import {getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams()
  const {sendRequest, status, data: loadedComments} =  useHttp(getAllComments)

  const { quoteId } = params

  useEffect( () => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  let comments;

  if(status === 'pending'){
    comments = <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(status === 'completed' && (loadedComments && loadedComments.length)){
    comments = <CommentsList comments={loadedComments} />
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className="centered">
        No Comments were added yet!
    </p>
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const AddedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={AddedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
