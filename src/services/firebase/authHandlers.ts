import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, facebookProvider, googleProvider } from './firebaseConfig';

export const signInWithGooglePopup = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const signInWithFacebookPopup = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  return result.user;
};

export const logout = async () => {
  await signOut(auth);
};
