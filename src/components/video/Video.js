import React from 'react';
import { AiFillEye } from 'react-icons/ai';

import './_video.scss';

const Video = () => {
  return (
    <div className='video'>
      <div className='video__top'>
        <img
          src='https://i.ytimg.com/vi/RQwsBYau6uE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDcvOH_6Sn_Utd6TuYSBu2yBfGzzA'
          alt=''
        />
        <span>05:43</span>
      </div>
      <div className='video__title'>Create smth in 5 minutes</div>
      <div className='video__details'>
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span> 1 day ago</span>
      </div>
      <div className='video__channel'>
        <img
          src='https://yt3.ggpht.com/ytc/AKedOLRPZwQtsGpRz0emeti2XYbFO0vTLZumibolzxk_ug=s88-c-k-c0x00ffffff-no-rj'
          alt=''
        />
        <p>WTF</p>
      </div>
    </div>
  );
};

export default Video;
