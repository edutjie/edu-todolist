import Task from "./Task";

function TaskList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Task text={todo.text} key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
}

export default TaskList;
