import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [userInput, setUserInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const addTodo = (newToDo) => setToDos([...toDos, newToDo]);
  const handleToDo = (item) => setToDos(toDos.map((each) => each !== item));
  return (
    <div className="App">
      <Form
        addTodo={addTodo}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <ToDoList toDos={toDos} handleToDo={handleToDo} />
    </div>
  );
}

export default App;
