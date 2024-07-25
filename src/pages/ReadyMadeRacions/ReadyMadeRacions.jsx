import React from "react";
import HeaderReadyMadeRacions from "./HeaderReadyMadeRacions/HeaderReadyMadeRacions";
import Ticker from "../../components/Ticker/Ticker";
import Racion from "./Racion/Racion"
import Footer from "../../components/Footer/Footer";

function ReadyMadeRacions() {

  return (
    <div  className='ReadyMadeRacion'>
        <HeaderReadyMadeRacions />
        <Ticker/>
        <Racion/>
        <Footer/>

    </div>
  )
}

export default ReadyMadeRacions;