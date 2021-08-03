import { useContext } from "react";
import CompletedContext from "../components/store/completed-context";
import TaskList from "../components/TaskList";

function TodoDone() {
  const completedCtx = useContext(CompletedContext);

  let content;
  if (completedCtx.totalCompleted === 0) {
    content = (
      <p className="m-5 text-bgcolor text-center text-3xl cursor-default mt-20">
        You haven't &nbsp;
        <span className="font-bold text-secondary opacity-75 hover:opacity-100 hover:underline">
          completed
        </span>
        &nbsp; anything
      </p>
    );
  } else {
    content = (
      <div>
        <h1 className="text-center text-2xl my-10 text-bgcolor cursor-default">
          Your&nbsp;
          <span className="text-secondary font-bold opacity-80 hover:opacity-100 hover:underline">
            Completed
          </span>
          &nbsp;Task
        </h1>
        <div className="mt-2 sm:max-w-lg max-w-sm mx-auto rounded-3xl bg-white">
          <TaskList todos={completedCtx.completed} />
          <div className="flex justify-center p-4">
            <p>©edutjie</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container max-w-screen-md mx-auto my-20">
      {content}
    </section>
  );
}

export default TodoDone;
