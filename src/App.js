import './App.css';

import { Suspense } from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react';

import Footer from './components/layot/Footer.jsx';
import Header from './components/layot/Header.jsx';


import MainPage from './components/pages/MainPage';
import AddNewPage from './components/pages/AddNewPage.jsx';
import CalendarPage from './components/pages/CalendarPage';
import ProfilePage from './components/pages/ProfilePage';
import Auth from './components/pages/account/Auth';


const App = () => {

  let [userAuth, setUserAuth] = useState(false);
 
  return (
    <Router>
    <Header auth={userAuth}></Header>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes classname='page'>
        <Route path="/" element={<MainPage />}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/addnew" element={<AddNewPage/>} />
        <Route path='/calendar' element={<CalendarPage/>} />
        <Route path='/auth' element={<Auth setUserAuth={setUserAuth}/>} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
