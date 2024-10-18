import { useRef } from "react"

const TodoInput = ({setTodo}) => {
  const inputRef = useRef(null)

  const addTodo = () => {
    const newTOdo = {
      id : Number(new Date()),
      content : inputRef.current.value
    }
    setTodo((prev) => [newTOdo, ...prev])
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={addTodo} >추가</button>
    </>
  )
}

export default TodoInput;