import { useEffect, useState } from "react"
import useFetch from "../Hooks/useFetch"

const Advice = () => {
  const [isLoading, data] = useFetch('https://korean-advice-open-api.vercel.app/api/advice')
  
  return(
    <>
      {!isLoading && (
        <>
          <div>{data.message}</div>
          <div>-{data.author}-</div>
        </>
      )}
    </>
  )
}

export default Advice;;