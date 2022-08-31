import React,{useState} from 'react'
import {Contr, Data} from './../../types'
import Loader from '../loader';

import "./MainViewData.css"

function MainViewData(props: Contr, pr:Data) {
    const {isWaiting, coin, wallet, category, loader,description, price} = props;

  return (
    <div>MainViewData
        <h3>{String(isWaiting)}</h3>

        {isWaiting ? (loader ? <Loader/>: <ul>
        <li>{category}</li>
        <li>{description}</li>
        <li>{price}</li> 
        </ul>) : null}
        

    </div>
  )
}

export default MainViewData

