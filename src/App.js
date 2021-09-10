import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (newToDo) => setToDos([...toDos, newToDo]);
  const handleToDo = (item) => setToDos(toDos.filter((each) => each !== item));

  return (
    <div className="mainContainer">
      <div className="containerBox">
        <Form addToDo={addToDo} />
        <ToDoList toDos={toDos} handleToDo={handleToDo} />
      </div>
    </div>
  );
}

export default App;
