import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Game from './pages/Game';
import Main from './pages/Main';
import Rank from './pages/Rank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="game" element={<Game /> } />
        <Route path="rank" element={ <Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
