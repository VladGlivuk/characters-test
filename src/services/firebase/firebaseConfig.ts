import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXo23vmBI8Ec4SSxQJYSyIKPDp6jqL4Fs',
  authDomain: 'characters-test-4df89.firebaseapp.com',
  projectId: 'characters-test-4df89',
  storageBucket: 'characters-test-4df89.firebasestorage.app',
  messagingSenderId: '797993015306',
  appId: '1:797993015306:web:dee3a74dea80141d5967f3'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const facebookProvider = new FacebookAuthProvider();
