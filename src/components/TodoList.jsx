import Todo from "./Todo";

const TodoList = ({todo, setTodo}) => {
  return (
    <>
      <ul>
        {todo.map((el) => (
          <Todo key={el.id} todo={el} setTodo={setTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;