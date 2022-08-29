import React,{useState} from "react";
// import Loader from "../loader";
import "./MainView.css";
import MainViewData from "../main-view-data";
import MainViewForm from "../main-view-form";

function MainView() {

    interface Contr{
        isWaiting: Boolean,
        
    }
    const [control, setControl] = useState<Contr>({
        isWaiting: false
    })

    function clickBtn (coin: string, wallet: string) {
        // setControl({
        //     isWaiting: !control.isWaiting
        // })
        console.log(`qq from MainView. coin is ${coin}, wallet is ${wallet}`)
    }
  return (
  <div className="mainView">
    <h2 className="descView">MainView</h2>
    <div className="blockView">
        <div className="formView">
            <MainViewForm 
            clickBtn={clickBtn}
            />
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

