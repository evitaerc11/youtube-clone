import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDs4h5jlryRF1b9VUUaKnYfsxuCrpGL3cg',
  authDomain: 'wtf-clone.firebaseapp.com',
  projectId: 'wtf-clone',
  storageBucket: 'wtf-clone.appspot.com',
  messagingSenderId: '617983580680',
  appId: '1:617983580680:web:22799d3e3c450ee8ac4fbd',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
