import './App.css';
import React, { useState } from 'react';
import MainAppBar from './components/MainAppBar/MainAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Main from "./pages/Main/Main";

function App() {
  const [user, setUser] = useState({});
  const idCliente = "889237171145-10klskbip4pvqqjveckhc10m706l0erd.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={idCliente}>
      <BrowserRouter>
        <MainAppBar
          login={setUser}
        />
        <Routes>
          <Route path="" element={<Main />} />
          
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}


export default App;