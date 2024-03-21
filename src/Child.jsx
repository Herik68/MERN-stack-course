import React, { useContext } from 'react'
import { FirstContext } from './components/context/Firstcontext'

const Child = () => {
    const {userName,liveIn}=useContext(FirstContext);
  return (
    <div>{userName}<br></br>
    {liveIn}
    </div>
  )
}

export default Child