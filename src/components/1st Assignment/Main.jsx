import "./Main.css"
import Formbox from "./Formbox"
import Listbox from "./Listbox"
import { useState } from "react"

const Main = () => {
  const[userInfo,setUserInfo]=useState([]);
  const getUserInfo=(userInfoObj) =>{
    setUserInfo([...userInfo,userInfoObj])
  }
  return (
    <div className="main">
      <Formbox getUserInfo={getUserInfo}/>
      <Listbox userInfo={userInfo}/>
    </div>
  )
}

export default Main