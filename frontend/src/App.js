import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import GameList from './components/GameList';
import GameForm from './components/GameForm';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<GameList/>}></Route>
          <Route path='/' element={<GameForm/>}></Route> 
        </Routes>
      </Router>  
  );
}

export default App;