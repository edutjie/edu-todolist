import { useState, useEffect } from "react";
import FormPage from "../components/Form";
import TaskList from "../components/TaskList";
import db from "../firebase";
import Modal from "../components/clearallhandler/Modal";
import Backdrop from "../components/clearallhandler/Backdrop";

function TodoHome() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [loadedTodos, setLoadedTodos] = useState([]);

  function inputHandler(input) {
    console.log(input.target.value);
    setInputText(input.target.value);
  }

  function clearAllHandler() {
    // setTodos([]);
    setModalIsOpen(true);
    
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ text: doc.data().todo, id: doc.id }))
        );
        setIsLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://todo-list-c2ca2-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const todos = [];
  //       for (const key in data) {
  //         const todo = {
  //           id: key,
  //           ...data[key],
  //         };
  //         todos.push(todo);
  //       }
  //       setIsLoading(false);
  //       setLoadedTodos(todos);
  //     });
  // }, []);

  if (isLoading) {
    return (
      <section>
        <p className="text-bgcolor flex justify-center mt-10">Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <div className="container max-w-screen-md mx-auto my-20">
        <div>
          <h1 className="text-center text-2xl text-bgcolor cursor-default">
            What are you going&nbsp;
            <span className="text-secondary font-bold opacity-80 hover:opacity-100 hover:underline">
              Todo
            </span>
            &nbsp;today?
          </h1>
        </div>
        <FormPage
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          inputHandler={inputHandler}
        />

        {modalIsOpen && (
          <Modal onCancel={closeHandler} setModalIsOpen={setModalIsOpen} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeHandler} />}

        <div className="mt-2 sm:max-w-lg max-w-sm mx-auto rounded-3xl bg-white">
          <TaskList todos={todos} />
          <div className="flex justify-center p-4 z-0">
            <div
              onClick={clearAllHandler}
              className="grid grid-cols-10 bg-red-600 text-bgcolor min-w-125 hover:opacity-75 px-5 relative py-3 rounded-full cursor-pointer"
            >
              <div className="col-span-6">
                <p className="flex">Clear All</p>
              </div>
              <div className="bg-red-500 rounded-full col-span-4 p-3 absolute right-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
