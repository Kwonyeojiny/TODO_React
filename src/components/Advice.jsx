import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"

const Advice = () => {
  const [isLoading, data] = useFetch('https://korean-advice-open-api.vercel.app/api/advice')
  
  return(
    <>
      {!isLoading && (
        <>
          <div className="advice">{data.message}</div>
          <div className="advice">-{data.author}-</div>
        </>
      )}
    </>
  )
}

export default Advice;;