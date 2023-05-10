import './App.css';

import { Suspense } from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState, useCallback} from 'react';
import {RequireAuth} from './components/uxComponents/requireAuth';

import Header from './components/layot/Header.jsx';


import MainPage from './components/pages/MainPage';
import AddNewPage from './components/pages/AddNewPage.jsx';
import CalendarPage from './components/pages/CalendarPage';
import ProfilePage from './components/pages/ProfilePage';
import Auth from './components/pages/account/Auth';
import StatisticPage from './components/pages/StatisticPage';

import { AuthContext } from './context/auth-context';

const App = () => {

  let [userAuth, setUserAuth] = useState({ AuthStatus: false, userId: false, token: false });

  const login = useCallback((userId, token) => {
    setUserAuth({AuthStatus: true, userId: userId, token: token});
  }, [setUserAuth]);
  
  const logout = useCallback(() => {
    setUserAuth({AuthStatus: false, userId: null});
  }, [setUserAuth]);

  return (
    <AuthContext.Provider value={{AuthStatus: userAuth, login: login, logout: logout}}>
      <Router>
        <Header auth={userAuth}></Header>

        <Suspense fallback={<div>Loading...</div>}>
        <Routes className='page'>
        
          <Route path="/" element={<MainPage />}/>
          <Route path='/profile' element={<RequireAuth><ProfilePage/></RequireAuth>}/>
          <Route path="/addnew" element={<RequireAuth><AddNewPage/></RequireAuth>} />
          <Route path='/calendar' element={<RequireAuth><CalendarPage/></RequireAuth>} />
          <Route path='/statistic' element={<RequireAuth><StatisticPage/></RequireAuth>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
