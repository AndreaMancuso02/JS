import Form from "./Form"
import './ToDoList.css'

function ToDoList({ todos, addTodo, removeTodo }) {
  return (
    <>
      <Form addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo} ({todo.data})
            <button
            onClick={() => removeTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToDoList