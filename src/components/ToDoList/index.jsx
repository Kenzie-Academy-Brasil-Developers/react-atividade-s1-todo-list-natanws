import "./styles.css";

function ToDoList({ toDos, handleToDo }) {
  return (
    <>
      {toDos.map((currentToDo, index) => (
        <div className="toDo">
          <p key={index}>{currentToDo}</p>
          <button onClick={() => handleToDo(currentToDo)}>x</button>
        </div>
      ))}
    </>
  );
}

export default ToDoList;
