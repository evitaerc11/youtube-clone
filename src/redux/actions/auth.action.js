import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase';
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actionTypes';

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
    const res = await signInWithPopup(auth, provider);
    console.log(res);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const accessToken = credential.accessToken;

    // const accessToken = res.user.accessToken;

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    sessionStorage.setItem('access-token', accessToken);
    sessionStorage.setItem('user', JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOGOUT,
  });

  sessionStorage.removeItem('access-token');
  sessionStorage.removeItem('user');
};
