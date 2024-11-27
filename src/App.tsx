import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase/firebaseConfig';
import useUserStore from './store/user/useUserStore';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import './index.css';

function App() {
  const { setUser } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route index path="/characters" element={<CharactersListPage />} />

          <Route path="/character/:id" element={<CharacterDetailsPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
