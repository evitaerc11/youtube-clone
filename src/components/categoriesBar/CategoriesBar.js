import React, { useState } from 'react';
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

  const handleClick = (value) => {
    setActiveEle(value);
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
