import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBCRIPTION_STATUS,
} from '../actionTypes';

export const channelDetailsReducer = (
  state = {
    loading: true,
    channel: {},
    subcriptionStatus: false,
  },
  action
) => {
  switch (action.type) {
    case CHANNEL_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CHANNEL_DETAILS_SUCCESS:
      return { ...state, loading: false, channel: action.payload };
    case CHANNEL_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SET_SUBCRIPTION_STATUS:
      return {
        ...state,
        subcriptionStatus: action.payload,
      };
    default:
      return state;
  }
};
