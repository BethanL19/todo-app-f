import { ToDo } from "./toDo";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="mainTitle">My To-Do List</h1>
      <ToDo />
    </>
  );
}

export default App;
