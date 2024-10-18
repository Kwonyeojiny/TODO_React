const formatTime = (seconds) => {
  // 1시간 : 3600초
  // 1분 : 60초
  const timeString = 
    `${String(Math.floor(seconds / 3600)).padStart(2,"0")
    }:${String(Math.floor((seconds  % 3600) / 60)).padStart(2,"0")
    }:${String(seconds%60).padStart(2,"0")}`
  return timeString;
}

export default formatTime;