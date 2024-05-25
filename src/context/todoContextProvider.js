import React from "react";
import TodoContext from "./todoContext";

const TodoContextProvider = ({ children }) => {

    let todos = JSON.parse(localStorage.getItem("todoList"));
    const [todoList, setTodoList] = React.useState(todos);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
