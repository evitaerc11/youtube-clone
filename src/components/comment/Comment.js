import React from 'react';
import moment from 'moment';

import './_comment.scss';

const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
      <img
        src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
        alt=''
        className='rounded-circle mr-3'
      />
      <div className='comment__body'>
        <p className='comment__header mb-1'>
          User • {moment('2022-01-1').fromNow()}
        </p>
        <p className='mb-0'>Nice!!!!!!!!!!!!!!!!!!!</p>
      </div>
    </div>
  );
};

export default Comment;
