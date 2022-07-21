import React from 'react';

import Rotas from './rotas';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../App.css'
import Navbar from '../components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Rotas />
      </div>
    </>
  )
}

export default App;
