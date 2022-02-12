import request from '../../api'
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBCRIPTION_STATUS
} from '../actionTypes'

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST
    })

    const { data } = await request('/channels', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: id
      }
    })

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0]
    })
  } catch (error) {
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.message
    })
  }
}

export const checkSubcriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await request('/subscriptions', {
      params: {
        part: 'snippet,contentDetails',
        forChannelId: id,
        mine: true
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`
      }
    })
    dispatch({
      type: SET_SUBCRIPTION_STATUS
      // payload: data.items.length !== 0,
    })

    console.log(data)
  } catch (error) {
    console.log(error.response.data)
  }
}
