import React,{useState} from "react";
// import Loader from "../loader";
import "./MainView.css";
import MainViewData from "../main-view-data";

function MainView() {

    interface Contr{
        isWaiting: Boolean
    }
    const [control, setControl] = useState<Contr>({
        isWaiting: false
    })

    const clickBtn = () =>{
        setControl({
            isWaiting: !control.isWaiting
        })
    }
  return (
  <div className="mainView">
    <h2 className="descView">MainView</h2>
    <div className="blockView">
        <div className="formView">
            <button
             onClick={()=>clickBtn()}>click me</button>
        </div>
        <div className="dataView">
            <MainViewData 
             isWaiting={control.isWaiting} 
             />
        </div>
    </div>
    </div>
    )
}

export default MainView;

