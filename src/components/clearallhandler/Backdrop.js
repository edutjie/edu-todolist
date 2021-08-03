function Backdrop(props) {
    return <div className="fixed bg-gray-900 h-screen top-0 w-screen opacity-75 left-0 z-10" onClick={props.onCancel}></div>
}

export default Backdrop;