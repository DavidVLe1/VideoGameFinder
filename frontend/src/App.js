import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp"


import './App.css';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/results' element={<GameList/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/preferences' element={<GameForm/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </Router>  
  );
}

export default App;