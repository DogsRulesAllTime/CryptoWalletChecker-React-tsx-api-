import React,{useState} from 'react'
import {Contr, Data, TestInter} from './../../types'
import Loader from '../loader';

import "./MainViewData.css"

function MainViewData(props: Contr) {
  const {isWaiting, coin, wallet, category, loader,description, price, error} = props;
  const frameData = {isWaiting, category, description, price}
    const spinner = isWaiting ?(loader ? <Loader/> : null) : null
    const info = !loader ? <DataFraim qq={frameData}/> : null
    const errFrame = error? <ErrorFrame /> : null
  return (
    <div>MainViewData
        <h3>{String(isWaiting)}</h3>
      {spinner}
      {errFrame}
      {info}
        {/* {isWaiting ? (loader ? <Loader/>: <ul>
        <li>{category}</li>
        <li>{description}</li>
        <li>{price}</li> 
        </ul>) : null}
         */}

    </div>
  )
}

export default MainViewData

const DataFraim = ({qq}: TestInter) =>{
  const { category, description, price} = qq;
  return(
    <React.Fragment>
        <ul>
        <li>{category}</li>
        <li>{description}</li>
        <li>{price}</li> 
        </ul>
        </React.Fragment>
  )
}

const ErrorFrame = () =>{
  return(
    <React.Fragment>
      <h3>Элемент не найден</h3>
    </React.Fragment>
  )
}
