import "./styles.css";

function Form({ addToDo, userInput, setUserInput }) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => addToDo(userInput)}>Click me</button>
      </form>
    </div>
  );
}

export default Form;
