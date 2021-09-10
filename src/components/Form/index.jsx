import "./styles.css";
import { useState } from "react";

function Form({ addToDo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="formBox">
      <form action="">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            addToDo(userInput);
            setUserInput("");
          }}
        >
          Adicionar ToDo
        </button>
      </form>
    </div>
  );
}

export default Form;
