import { useRef, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Clock from './components/Clock'

function App() {
  const [todo, setTodo] = useState([
    {id:Number(new Date()), content: '안녕하세요'}
  ])

  return (
    <>
      <Clock />
      <TodoInput setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App;
