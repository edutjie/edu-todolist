import { useContext } from "react";
import db from "../firebase";
import CompletedContext from "./store/completed-context";

function Task(props) {
  const completedCtx = useContext(CompletedContext);
  const itemIsCompleted = completedCtx.itemIsCompleted(props.id);

  function xHandler() {
    // props.setTodos(props.todos.filter((e) => e.id !== props.id));
    db.collection('todos').doc(props.id).delete()
  }

  function completeHandler() {
    // props.setTodos(
    //   props.todos.map((item) => {
    //     if (item.id === props.todo.id) {
    //       return {
    //         ...item,
    //         completed: !props.completed,
    //       };
    //     }
    //     return item;
    //   })
    // );

    if (itemIsCompleted) {
      completedCtx.removeCompleted(props.id);
    } else {
      completedCtx.addCompleted({
        id: props.id,
        text: props.text,
      });
    }
  }

  return (
    <div
      className="p-5 flex justify-between border-b-4 text-primary break-all items-center"
      id={props.id}
    >
      <p
        className={`max-w-sm ${
          itemIsCompleted ? "line-through opacity-50" : ""
        }`}
      >
        {props.text}
      </p>
      <div className="cursor-pointer flex space-x-1">
        <button onClick={completeHandler}>
          <svg
            className="w-7 h-7 hover:opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div onClick={xHandler}>
          <svg
            className="w-7 h-7 hover:opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Task;
