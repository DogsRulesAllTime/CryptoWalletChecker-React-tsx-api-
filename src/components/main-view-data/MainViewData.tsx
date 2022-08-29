import React,{useState} from 'react'
import {Contr} from './../../types'
import Loader from '../loader';

import "./MainViewData.css"

function MainViewData(props: Contr) {
    const {isWaiting} = props;

    const [data, setData] = useState({
        category: null,
        description: null,
        price: null,
        loader: true
      })
      
        let URL: string = 'https://fakestoreapi.com/products/17';
      
        fetch(URL)
        .then((res) => res.json())
        .then((body) => 
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
    <div>MainViewData
        <h3>{String(isWaiting)}</h3>

        {isWaiting ? (data.loader ? <Loader/>: <ul>
        <li>{data.category}</li>
        <li>{data.description}</li>
        <li>{data.price}</li>
        </ul>) : null}
        

    </div>
  )
}

export default MainViewData

