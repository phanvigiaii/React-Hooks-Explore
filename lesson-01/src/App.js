import { useState } from "react";
import "./App.css";
import BoxColor from "./components/BoxColor";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const faker = require("faker");

function App() {
    // State of Box Color
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("color") || "deeppink";
        return initColor;
    });

    // State of ToDoList
    const [todos, setTodos] = useState(() => {
        return [
            {
                id: faker.datatype.uuid(),
                title: "Learn ReactJS Hooks",
            },
            {
                id: faker.datatype.uuid(),
                title: "Learn Advance Javascript",
            },
        ];
    });

    // Event of Box Color
    function handleBoxClick() {
        const colors = ["deeppink", "red", "blue", "yellow", "black"];
        const index = Math.trunc(Math.random() * 5);
        const color = colors[index];
        localStorage.setItem("color", color);
        setColor(color);
    }

    // Event of ToDoList
    function handleToDoClick(todo) {
        const index = todos.findIndex((x) => x.id === todo.id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    // Event of ToDoForm
    function handleToDoFormSubmit(value) {
        const newTodo = [
            ...todos,
            {
                id: faker.datatype.uuid(),
                title: value,
            },
        ];
        setTodos(newTodo);
    }

    return (
        <div className="App">
            <h1>Hello ReactJS</h1>
            <BoxColor color={color} onBoxClick={handleBoxClick} />
            <ToDoForm onSubmit={handleToDoFormSubmit} />
            <ToDoList todos={todos} onToDoClick={handleToDoClick} />
        </div>
    );
}

export default App;
