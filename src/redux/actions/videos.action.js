import request from '../../api';

import {
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
  HOME_VIDEO_FAIL,
} from '../actionTypes';

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST,
    });

    const { data } = await request('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'SG',
        maxResults: 20,
        pageToken: '',
      },
    });

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
