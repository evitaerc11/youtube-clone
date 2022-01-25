import {
  HOME_VIDEO_FAIL,
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
} from '../actionTypes';

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: false,
  },
  action
) => {
  switch (action.type) {
    case HOME_VIDEO_REQUEST:
      return { ...state, loading: true };
    case HOME_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
      };
    case HOME_VIDEO_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
