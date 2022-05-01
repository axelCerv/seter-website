
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Footer from './components/Footer';

function App({children}) {

  return (
    <>
      <Navbar />
      <div className='body'>
      {
        children
      }
      </div>
      <Footer />
    </>
    
  );
}

export default App;
