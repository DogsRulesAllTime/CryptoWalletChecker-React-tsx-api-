import React, { useState } from "react";
// import Loader from "../loader";
import "./MainView.css";
import MainViewData from "../main-view-data";
import MainViewForm from "../main-view-form";

import { Contr, Data } from "./../../types";

function MainView() {
  const [control, setControl] = useState<Contr>({
    isWaiting: false,
    coin: undefined,
    wallet: undefined,
  });

  const [data, setData] = useState<Data>({
    category: undefined,
    description: undefined,
    price: undefined,
    loader: false,
    error: false
  });
  // First variation of func
  //     const URL: string = `https://fakestoreapi.com/products/`;
  //   async function  dataCollect(url:string) {
  //   const response = await fetch(url)
  //   const res = await response.json()
  //   await setData({
  //     category: res.category,
  //     description: res.description,
  //     price: res.price,
  //     loader: false
  //   })
  //   console.log('Collect.....');
  //  }

  // Second Variation (try catch )
  const URL: string = `https://fakestoreapi.com/products/`;
  async function dataCollect(url: string) {
    try {
      const response = await fetch(url);
      const res = await response.json();
      await setData({
        category: res.category,
        description: res.description,
        price: res.price,
        loader: false
      });
      console.log("Collect.....");
    } catch (error) {
        console.log("Look at your Error, Dude .....", error);
        setData({
            loader: false,
            error:true
        })
    }
  }

  function clickBtn(coin: string, wallet: number) {
    setData({
      loader: true,
    });
    setControl({
      // isWaiting: !control.isWaiting,
      isWaiting: true,
      coin: coin,
      wallet: wallet,
    });
    dataCollect(URL + wallet);
    console.log(data.category);
    // console.log(`qq from MainView. coin is ${coin}, wallet is ${wallet}`)
  }
  return (
    <div className="mainView">
      <h2 className="descView">MainView</h2>
      <div className="blockView">
        <div className="formView">
          <MainViewForm clickBtn={clickBtn} />
        </div>
        <div className="dataView">
          <MainViewData
            isWaiting={control.isWaiting}
            coin={control.coin}
            wallet={control.wallet}
            category={data.category}
            loader={data.loader}
            description={data.description}
            price={data.price}
            error={data.error}
          />
        </div>
      </div>
    </div>
  );
}

export default MainView;
