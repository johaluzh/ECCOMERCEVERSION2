// App.jsx
import React from 'react';
import { Outlet , Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MiniNav from './Components/MiniNav';
import MenuHamburguesa from './Components/MenuHamburguesa';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
      <MiniNav />
      <MenuHamburguesa />
      <NavBar />

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
