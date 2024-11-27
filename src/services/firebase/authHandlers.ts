import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, facebookProvider, googleProvider } from './firebaseConfig';

export const signInWithGooglePopup = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  window.localStorage.setItem('user', JSON.stringify(result.user));
  return result.user;
};

export const signInWithFacebookPopup = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  window.localStorage.setItem('user', JSON.stringify(result.user));
  return result.user;
};

export const logout = async () => {
  await signOut(auth);
  window.localStorage.removeItem('user');
};
