import './App.css';

import React, {useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavBar from './components/common/NavBar';
import RecipePage from './components/recipe/RecipePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';


function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
    <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<RecipePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  )

  // put this in one of the recipe files
  // return (
  //   <div className='text-center m-5'>
  //     <div className='card p-4'>
  //       <RecipeForm />
  //     </div>
  //   </div>
  // );
}

export default App;
