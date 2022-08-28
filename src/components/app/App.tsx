import React, { useState } from 'react';
import './App.css';
import Header from '../header';
import MainView from '../main-view';

function App() {

// interface IProduct {
//   category: string
//   description: string
//   id?: number
//   image: string
//   price: number
//   title: string
//   rating: {
//     rate: number
//     count: number
//   }
// }


  return (
    <div className="App">
   
      <Header />
      <MainView />

    </div>
  );
}

export default App;
