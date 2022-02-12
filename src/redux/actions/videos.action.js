import request from '../../api'

import {
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
  HOME_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL
} from '../actionTypes'

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST
    })

    const { data } = await request('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'SG',
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken
      }
    })

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: 'All'
      }
    })
  } catch (error) {
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message
    })
  }
}

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST
    })

    const { data } = await request('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: 'video'
      }
    })

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword
      }
    })
  } catch (error) {
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message
    })
  }
}

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST
    })

    const { data } = await request('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: id
      }
    })

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0]
    })
  } catch (error) {
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message
    })
  }
}

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'getRelatedVideos/request'
    })

    const { data } = await request('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video'
      }
    })

    dispatch({
      type: 'getRelatedVideos/success',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getRelatedVideos/fail',
      payload: error.message
    })
  }
}
