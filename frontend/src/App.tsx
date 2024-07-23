import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import axios from "axios";

export type TodoDTO = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([]);
  const [newTodo, setNewTodo] = useState<TodoDTO>({
    id: 0,
    title: "",
    description: "",
    done: false,
  });

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  const updateTodos = (todos: TodoDTO[]) => {
    setTodos(todos);
  };

  const updateForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const addTodo = () => {
    axios.post("http://localhost:3000/todos", newTodo).then((response) => {
      setTodos(response.data);
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h3>What needs to be done?</h3>
        <div className="form">
          <input
            type="text"
            placeholder="Title"
            onChange={updateForm}
            name="title"
          />
          <textarea
            placeholder="Description"
            onChange={updateForm}
            name="description"
          />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} updateTodos={updateTodos} />
      ))}
    </div>
  );
}

export default App;
