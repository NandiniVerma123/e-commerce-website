import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localSignUp = localStorage.getItem('signUp');
    if (localSignUp) {
      setIsLoggedIn(true); 
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Router>
        {isLoggedIn && <Header />}  
        
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/product/:id" element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />} />
          <Route path="/login" element={<SignInSignupWithLocalStorage />} />
        </Routes>

        {isLoggedIn && <Sidebar />}  
        {isLoggedIn && <Footer />}  
      </Router>
    </div>
  );
};

export default App;

