import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/auth.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import {
  homeVideosReducer,
  listRelatedVideosReducers,
  selectedVideoReducer
} from './reducers/videos.reducer'

const initState = {}

const reducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  listRelatedVideos: listRelatedVideosReducers
})

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
