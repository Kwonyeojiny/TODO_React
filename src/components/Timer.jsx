import { useEffect, useRef, useState } from "react";
import formatTime from "./formatTime";

const Timer = ({time, setTime}) => {
  const [startTime, setStartTime] = useState(0)
  const [isOn,setIsOn] = useState(false);
  const timerRef = useRef(null)

  useEffect(()=>{
    if(isOn && time > 0){
      const timeId = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000);
      timerRef.current = timeId
    } else if(!isOn || time == 0) {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  },[isOn, time])

  return(
    <>
      <div>
        {time ? formatTime(time) : formatTime(startTime)}
        <button onClick={()=>{
          setIsOn(true)
          setTime(time ? time : startTime)
          setStartTime(0)
        }} >시작</button>
        <button onClick={()=>setIsOn(false)} >멈춤</button>
        <button onClick={()=> {
          setTime(0)
          setIsOn(false)
        }
        } >리셋</button>
        <br/>
        <input 
        type="range" 
        value={startTime}
        min='0'
        max='3600'
        step='30'
        onChange={(e)=>setStartTime(e.target.value)}
      />
      </div>
      
    </>
  )

}

export default Timer;