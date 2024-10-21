import Todo from "./Todo";

const TodoList = ({todo, setTodo, setCurrentTodo, currentTodo}) => {
  return (
    <>
      <ul>
        {todo.map((el) => (
          <Todo key={el.id} 
                todo={el} 
                setTodo={setTodo} 
                setCurrentTodo={setCurrentTodo}
                currentTodo={currentTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;