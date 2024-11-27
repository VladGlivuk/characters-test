import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersListPage />} />

        <Route path="/character/:id" element={<CharacterDetailsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
