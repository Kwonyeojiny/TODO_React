import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {id:Number(new Date()), content: '안녕하세요'}
  ])

  return (
    <>
      <TodoInput setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  )
}

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

const TodoList = ({todo, setTodo}) => {
  return (
    <>
      <ul>
        {todo.map((el) => (
          <Todo todo={el} setTodo={setTodo}/>
        ))}
      </ul>
    </>
  )
}

const Todo = ({todo, setTodo}) => {
  return (
    <>
      <li key={todo.id}>
        {todo.content}
          <button onClick={() => {
            setTodo(prev=> prev.filter((el)=> el.id !== todo.id))
          }} >삭제</button>
      </li>
    </>
  )
}

export default App
