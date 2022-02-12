import {
  HOME_VIDEO_FAIL,
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS
} from '../actionTypes'

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
  },
  action
) => {
  switch (action.type) {
    case HOME_VIDEO_REQUEST:
      return { ...state, loading: true }
    case HOME_VIDEO_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === action.payload.category
            ? [...state.videos, ...action.payload.videos]
            : action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category
      }
    case HOME_VIDEO_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null
  },
  action
) => {
  switch (action.type) {
    case SELECTED_VIDEO_REQUEST:
      return { ...state, loading: true }
    case SELECTED_VIDEO_SUCCESS:
      return { ...state, loading: false, video: action.payload }
    case SELECTED_VIDEO_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export const listRelatedVideosReducers = (state = {}, action) => {
  switch (action.type) {
    case 'getRelatedVideos/request':
      return { ...state, loading: true }
    case 'getRelatedVideos/success':
      return { ...state, loading: false, relatedVideos: action.payload.items }
    case 'getRelatedVideos/fail':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
