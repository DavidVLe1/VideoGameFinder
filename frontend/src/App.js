import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";


import './App.css';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/results' element={<GameList/>}></Route>
          <Route path='/preferences' element={<GameForm/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </Router>  
  );
}

export default App;