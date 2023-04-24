import React from 'react';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <div className="App">
        <header>
            <h2>Friends Database</h2>
            <Link className='link' to='login'>Login</Link>
            <Link className='link' to='friends'>Friends List</Link>
            <Link className='link' to='friends/add'>Add Friend</Link>
            <Link className='link' to='logout'>Logout</Link>
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/friends" 
            element={ 
              <PrivateRoute>
                <FriendsList />
              </PrivateRoute>
            } 
          />
          <Route path="/friends/add" 
            element={
              <PrivateRoute>
                <AddFriend />
              </PrivateRoute>
            } 
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>  
      </div>
  );
}

export default App;
