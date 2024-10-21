import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Clock from './components/Clock'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'
import Advice from './components/Advice'
import useFetch from './Hooks/useFetch'

function App() {
  const [isLoading, data] = useFetch('http://localhost:3000/todo')
  const [todo, setTodo] = useState([])
  const [currentTodo, setCurrentTodo] = useState(null)
  const [time, setTime] = useState(0)
  const [isTimer, setIsTimer] = useState(false)

  useEffect(()=>{
    if(currentTodo){
      fetch(`http://localhost:3000/todo/${currentTodo}`, {
        method : 'PATCH',
        body : JSON.stringify({time : 
          todo.find((el) => el.id === currentTodo).time + 1}),
      }).then(res => res.json())
        .then(res => setTodo(prev => prev.map(
          el => el.id === currentTodo ? res : el
        )))
    }
  },[time])

  useEffect(()=>{
    setTime(0)
  },[isTimer])

  useEffect(() => {
    if(data) setTodo(data);
  },[isLoading])

  return (
    <>
      <h1>권여진이의 TODO</h1>
      <Clock />
      <Advice />
      <button onClick={()=> 
        setIsTimer(prev => !prev)}
      >{isTimer ? '스톱워치로 변경' : '타이머로 변경'}</button>
      {isTimer ? (
        <StopWatch time={time} setTime={setTime}/>) :
        (<Timer time={time} setTime={setTime}/>)
      }
      <TodoInput setTodo={setTodo}/>
      <TodoList todo={todo} 
                setTodo={setTodo} 
                setCurrentTodo={setCurrentTodo}
                currentTodo={currentTodo} />
    </>
  )
}

export default App;
