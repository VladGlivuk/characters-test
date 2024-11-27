import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import './index.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/characters" element={<CharactersListPage />} />

        <Route path="/character/:id" element={<CharacterDetailsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
