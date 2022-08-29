import React from "react";
import "./MainViewForm.css";

type Props = {
  clickBtn: (e: any) => void  
} 

function MainViewForm<Props>(props:any) {
  const {clickBtn} = props;
  const clgEv = (e:React.FormEvent<HTMLFormElement>):void =>{
    e.preventDefault();
    console.log(1212312);
    const coin = (document.getElementById('cars') as HTMLInputElement).value;
    console.log(coin)
    const wallet = (document.getElementById('wallet') as HTMLInputElement).value;
    console.log(wallet)
    clickBtn(coin, wallet);
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>clgEv(e)}>
        <label htmlFor="cars">Choose coin:</label>
        <select id="cars" name="cars">
          <option value="BTC" >BTC</option>
          <option value="ETH">ETH</option>
          <option value="ETC" >ETC</option>
        </select>
        <br />
        <label htmlFor="walletInput">Input wallet:</label>
        <input type="text" id="wallet" required name="fname" />
        <br />
        <button
        type='submit'
        >FIND</button>
      </form>
    </div>
  );
}

export default MainViewForm;
