import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Clock from './components/Clock'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'
import Advice from './components/Advice'

function App() {
  const [todo, setTodo] = useState([
    {id:Number(new Date()), content: '안녕하세요'}
  ])

  return (
    <>
      <Advice />
      <Clock />
      <StopWatch/>
      <Timer/>
      <TodoInput setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App;
