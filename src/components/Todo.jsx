import formatTime from "./formatTime";

const Todo = ({todo, setTodo, setCurrentTodo, currentTodo}) => {
  return (
    <>
      <li className={currentTodo === todo.id ?
        'current' : ''}>
        <div>
        {todo.content}
        <br/>
        {formatTime(todo.time)}
        </div>
        <div>
          <button
            onClick={()=> setCurrentTodo(todo.id)}
          >시작하기</button>
          <button onClick={() => {
            fetch(`http://localhost:3000/todo/${todo.id}`,{
              method: "DELETE"
            }).then((res) => {
              if(res.ok){
                setTodo((prev) => prev.filter((el)=> el.id !== todo.id))
              }
            })
          }} >삭제</button>
        </div>
          
      </li>
    </>
  )
}
  
export default Todo;