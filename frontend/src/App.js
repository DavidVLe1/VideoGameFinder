import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { useState } from 'react';
import Logout from './components/LogOut';

import './App.css';
import Library from './components/Library';
import Top3Games from './components/Top3Games';
import DisplayResults from './components/DisplayResults';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    // console.log('isAuthenticated updated:', status);
  };
  const[isUserId, setisUserId]= useState(0);
  const [gamesData, setGamesData] = useState([]);
  const handleGamesData=(gamesData)=>{
    setGamesData(gamesData);
  }
  const handleUserId = (userId) => {
    setisUserId(userId);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signin' element={<SignIn handleAuthentication={handleAuthentication} isAuthenticated={isAuthenticated} handleUserId={handleUserId} isUserId={isUserId}/>}></Route>
        <Route path='/signup' element={<SignUp  handleAuthentication={handleAuthentication} isUserId={isUserId} handleUserId={handleUserId}/>}></Route>
        <Route path='/results' element={<GameList gamesData={gamesData} handleGamesData={handleGamesData}/>}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/library' element={<Library gamesData={gamesData} handleGamesData={handleGamesData} />}></Route>
        <Route path='/preferences' element={<GameForm isUserId={isUserId} />}></Route>
        <Route path='/logout' element={<Logout handleAuthentication={handleAuthentication} handleGamesData={handleGamesData}/>}></Route>
        <Route path='/recommend' element={<Top3Games gamesData={gamesData}/>}></Route>
        <Route path="/displayResults" element={<DisplayResults gamesData={gamesData}/>}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;