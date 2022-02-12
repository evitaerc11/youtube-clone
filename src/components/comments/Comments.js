import React from 'react';
import Comment from '../comment/Comment';

import './_comments.scss';

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className='comments'>
      <p>123 Comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img
          src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          alt=''
          className='rounded_circle mr-3'
        />
        <form onSubmit={handleComment} className='d-flex flex-grow-1'>
          <input
            type='text'
            className='flex-grow-1'
            placeholder='Write a comment'
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className='comments__list'>
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
