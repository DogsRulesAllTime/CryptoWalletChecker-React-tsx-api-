import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { log } from 'console';

function App() {

interface IProduct {
  category: string
  description: string
  id?: number
  image: string
  price: number
  title: string
  rating: {
    rate: number
    count: number
  }
}
const [data, setData] = useState({
  category: null,
  description: null,
  price: null,
  loader: true
})

  let URL: string = 'https://fakestoreapi.com/products/3';

  fetch(URL)
  .then((res) => res.json())
  .then(body => 
    // console.log(body.category)
    // console.log(body.category);
    setData({
      category: body.category,
      description: body.description,
      price: body.price,
      loader: false
    }
  ))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <h1>qqq</h1>

      {data.loader ? <p>loading</p>: <ul>
        <li>{data.category}</li>
        <li>{data.description}</li>
        <li>{data.price}</li>
      </ul>}
      
    </div>
  );
}

export default App;
