// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MiniNav from './Components/MiniNav';
import MenuHamburguesa from './Components/MenuHamburguesa';


const App = () => {
  return (
    <>
      <MiniNav />
      <MenuHamburguesa />
      <NavBar />
      
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
