import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import './_video.scss';
import { useNavigate } from 'react-router-dom';

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [view, setView] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');
  const _videoId = id?.videoId || id;

  const navigate = useNavigate();

  const get_video_details = async () => {
    const {
      data: { items },
    } = await request('/videos', {
      params: {
        part: 'contentDetails,statistics',
        id: _videoId,
      },
    });
    setDuration(items[0].contentDetails.duration);
    setView(items[0].statistics.viewCount);
  };
  useEffect(() => {
    get_video_details();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_videoId]);

  const get_channel_icon = async () => {
    const {
      data: { items },
    } = await request('/channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    });
    setChannelIcon(items[0].snippet.thumbnails.default);
  };
  useEffect(() => {
    get_channel_icon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  const handleVideoClick = () => {
    navigate(`/watch/${_videoId}`);
  };

  return (
    <div className='video' onClick={handleVideoClick}>
      <div className='video__top'>
        {/* <img src={medium.url} alt='' /> */}
        <LazyLoadImage src={medium.url} alt='' effect='blur' />
        <span className='video__top__duration'>{_duration}</span>
      </div>

      <div className='video__title'>{title}</div>
      <div className='video__details'>
        <span>
          <AiFillEye /> {numeral(view).format('0.a')} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className='video__channel'>
        {/* <img src={channelIcon?.url} alt='' /> */}
        <LazyLoadImage src={channelIcon?.url} alt='' effect='blur' />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
