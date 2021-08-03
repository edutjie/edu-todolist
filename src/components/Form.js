// import { useRef } from "react";
// import { useHistory } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";

function FormPage({ inputText, setInputText, inputHandler }) {
  // const history = useHistory();
  // const inputTextRef = useRef();

  function submitHandler(event) {
    // const enteredInputText = inputTextRef.current.value;

    // const todosData = {
    //   text: enteredInputText,
    // };
    // addTodosHandler(todosData);
    event.preventDefault();

    db.collection("todos").add({
      todo: inputText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInputText("");
  }

  // function addTodosHandler(todosData) {
  //   fetch(
  //     "https://todo-list-c2ca2-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(todosData),
  //       header: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then(() => {
  //     history.replace("/");
  //   });
  // }

  return (
    <form
      type="submit"
      className="flex justify-between bg-white text-primary p-5 my-10 shadow-lg rounded-full sm:max-w-lg max-w-sm mx-auto"
    >
      <input
        type="text"
        placeholder="Add things to do"
        className="w-full focus:outline-none"
        onChange={inputHandler}
        // ref={inputTextRef}
        value={inputText}
      />
      <button
        className="cursor-pointer"
        type="submit"
        onClick={submitHandler}
        disabled={!inputText}
      >
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
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
}

export default FormPage;
