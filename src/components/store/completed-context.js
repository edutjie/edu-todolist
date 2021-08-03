import { createContext, useState } from "react";

const CompletedContext = createContext({
  completed: [],
  totalCompleted: 0,
  addCompleted: (completedTask) => {},
  removeCompleted: (taskId) => {},
  itemIsCompleted: (taskId) => {},
});

export function CompletedContextProvider(props) {
  const [userCompleted, setUserCompleted] = useState([]);

  function addCompletedHandler(completedTask) {
    setUserCompleted((prevUserCompleted) => {
      return prevUserCompleted.concat(completedTask);
    });
  }

  function removeCompletedHandler(taskId) {
    setUserCompleted((prevUserCompleted) => {
      return prevUserCompleted.filter((task) => task.id !== taskId);
    });
  }

  function itemIsCompletedHandler(taskId) {
    return userCompleted.some((task) => task.id === taskId);
  }

  const context = {
    completed: userCompleted,
    totalCompleted: userCompleted.length,
    addCompleted: addCompletedHandler,
    removeCompleted: removeCompletedHandler,
    itemIsCompleted: itemIsCompletedHandler,
  };

  return (
    <CompletedContext.Provider value={context}>
      {props.children}
    </CompletedContext.Provider>
  );
}

export default CompletedContext;