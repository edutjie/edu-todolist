import db from "../../firebase";

function Modal(props) {
  function yesClearAll() {
    db.collection("todos")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
    props.setModalIsOpen(false);
  }
  return (
    <div className="container flex justify-center items-center top-0">
      <div className="grid fixed grid-rows-2 grid-cols-4 bg-white z-20 p-5 text-2xl rounded-2xl shadow-lg">
        <div className="col-span-4 text-center">Are you sure?</div>
        <button
          onClick={yesClearAll}
          className="col-span-2 text-xl text-center bg-green-400 hover:bg-green-500 p-3 rounded-full text-bgcolor mr-3"
        >
          YES
        </button>
        <button
          onClick={props.onCancel}
          className="col-span-2 text-xl text-center bg-red-400 hover:bg-red-500 p-3 rounded-full text-bgcolor"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default Modal;
