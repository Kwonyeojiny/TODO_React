import { useEffect, useRef, useState } from "react";

const StopWatch = () => {

  const [time, setTime] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if(isOn === true){
      const timerId = setInterval(()=>{
        setTime(prev => prev + 1 )
      },1000)
      timerRef.current = timerId;
    }
    else{
      clearInterval(timerRef.current);
    }
  },[isOn])

  return(
    <div>
      {formatTime(time)}
      <button onClick={()=>setIsOn(prev => !prev)} >{isOn ? "끄기" : "켜기"}</button>
      <button onClick={()=>{
        setTime(0);
        setIsOn(false)
      }} >리셋</button>
    </div>
  )
}

const formatTime = (seconds) => {
  // 1시간 : 3600초
  // 1분 : 60초
  const timeString = 
    `${String(Math.floor(seconds / 3600)).padStart(2,"0")
    }:${String(Math.floor((seconds  % 3600) / 60)).padStart(2,"0")
    }:${String(seconds%60).padStart(2,"0")}`
  return timeString;
}

export default StopWatch;