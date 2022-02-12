import React, { useEffect } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';

import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import './_videoMetaData.scss';
import {
  checkSubcriptionStatus,
  getChannelDetails,
} from '../../redux/actions/channel.action';

const VideoMetaData = ({ video, videoId }) => {
  const { snippet, statistics } = video;
  const { title, description, publishedAt, channelTitle, channelId } = snippet;
  const { likeCount, viewCount, dislikeCount } = statistics;

  const dispatch = useDispatch();
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const subcriptionStatus = useSelector(
    (state) => state.channelDetails.subcriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubcriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className='videoMetaData py-2'>
      <div className='videoMetaData__top'>
        <h5>{title}</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(viewCount).format('0.a')} Views •
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} />
              {numeral(likeCount).format('0.a')}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format('0.a')}
            </span>
          </div>
        </div>
      </div>
      <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
        <div className='d-flex'>
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle mr-3'
          />
          <div className='d-flex flex-column'>
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format('0.a')}{' '}
              Subcribers
            </span>
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'>
          {subcriptionStatus ? 'Subcribed' : 'Subcribe'}
        </button>
      </div>
      <div className='videoMetaData__description'>
        <ShowMoreText
          lines={3}
          more='Show more'
          less='Show less'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
