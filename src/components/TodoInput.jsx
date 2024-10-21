import { useRef } from "react"

const TodoInput = ({setTodo}) => {
  const inputRef = useRef(null)

  const addTodo = () => {
    const newTodo = {
      content : inputRef.current.value,
      time : 0
    }
    fetch('http://localhost:3000/todo',{
      method: "POST",
      body: JSON.stringify(newTodo)
    }).then(res => res.json())
      .then((res) => setTodo((prev) => [ ...prev, res]))
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={addTodo} >추가</button>
    </>
  )
}

export default TodoInput;