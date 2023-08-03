import { useEffect, useState } from "react";
import { data } from "./toDoFns";
import axios from "axios";

export function ToDo(): JSX.Element {
  const backend = "https://to-do-app-4rpq.onrender.com/items";
  const [tasks, setTasks] = useState<data[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleComplete = (item: data) => {
    // item.complete = true
    // not item.complete?
    axios.patch(backend + `/${item.id}`, { complete: true });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(backend);
      setTasks(response.data);
    };
    getData();
  }, []);

  const handleAddNewTask = () => {
    axios.post(backend, { text: newTask });
  };

  const items = tasks.map((item: data, index: number) => (
    <li className="items" key={index}>
      <label className="title" key={index}>
        {item.task}
      </label>
      <div className="buttons">
        <button
          key={index}
          className={"complete" + item.complete}
          onClick={() => {
            handleComplete(item);
          }}
        ></button>
        <button className="delete"></button>
      </div>
    </li>
  ));

  return (
    <>
      <input
        placeholder="new task..."
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add" onClick={handleAddNewTask}>
        Add
      </button>
      <ul className="list">{items}</ul>
    </>
  );
}
