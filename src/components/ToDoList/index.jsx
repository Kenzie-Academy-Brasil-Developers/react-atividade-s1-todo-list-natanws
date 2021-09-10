import "./styles.css";

function ToDoList({ toDos, handleToDo }) {
  return (
    <div>
      <div>
        {toDos.map((a) => (
          <p>{a}</p>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
