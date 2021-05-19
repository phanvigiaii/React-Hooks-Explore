import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

ToDoList.propTypes = {
    todos: PropTypes.array,
    onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    todos: [],
    onToDoClick: null,
};

function ToDoList(props) {
    const { todos, onToDoClick } = props;

    function handleClicK(todo) {
        if (onToDoClick) {
            onToDoClick(todo);
        } else {
            return;
        }
    }
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => handleClicK(todo)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;
