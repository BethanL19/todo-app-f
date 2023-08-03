import { useEffect, useState } from "react";
import { data } from "./toDoFns";
import axios from "axios";

export function ToDo(): JSX.Element {
  const [tasks, setTasks] = useState<data[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://to-do-app-4rpq.onrender.com/items"
      );
      setTasks(response.data);
    };
    getData();
  }, []);

  const items = tasks.map((item: data, index: number) => (
    <li key={index}>{item.task}</li>
  ));

  return <ul>{items}</ul>;
}
