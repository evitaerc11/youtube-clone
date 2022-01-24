import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  LOGOUT,
} from '../actionTypes';

const initState = {
  accessToken: sessionStorage.getItem('access-token')
    ? sessionStorage.getItem('access-token')
    : null,
  user: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user'))
    : null,
  loading: false,
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, accessToken: payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, accessToken: null, error: payload };
    case LOAD_PROFILE:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null, accessToken: null };

    default:
      return state;
  }
};
