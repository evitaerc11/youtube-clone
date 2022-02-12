import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonVideo = () => {
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
      <SkeletonTheme baseColor='#777' highlightColor='#444'>
        <Skeleton height={180} />
        <div>
          <span>
            <Skeleton
              circle
              height={36}
              width={36}
              style={{ margin: '.5rem' }}
            />
          </span>
          <span>
            <Skeleton height={30} />
          </span>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
