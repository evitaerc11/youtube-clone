import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../redux/actions/videos.action';
import './_categoriesBar.scss';

const keywords = [
  'All',
  'ReactJS',
  'Javascript',
  'Html',
  'Css',
  'Redux',
  'NodeJS',
  'Mongodb',
  'Firebase',
  'Billard',
  'Movie',
  'Mu',
];

const CategoriesBar = () => {
  const [activeEle, setActiveEle] = useState('All');

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveEle(value);
    // if (value === 'All') {
    //   dispatch(getPopularVideos());
    // } else {
    dispatch(getVideosByCategory(value));
    // }
  };

  return (
    <div className='categoriesBar'>
      {keywords.map((value, i) => (
        <span
          key={i}
          className={activeEle === value ? 'active' : ''}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
