import { useContext } from "react";
import TodoContext from "../context/todoContext";
import DeleteTodo from "./deleteTodo";
import TodoStatus from "./todoStatus";

function TodoList() {
    const { todoList } = useContext(TodoContext);

    return (
        <>
        {/* todoList starts here  */}
            {todoList.map((task, i) => {
                return (
                    // todoList  item starts here 
                    <li className="list-group-item" key={i}>
                        <div className="row">
                            {/* todo check status starts here  */}
                            <span className="col-1">
                                <TodoStatus todo_index={i} />
                            </span>
                            {/* todo check status ends here  */}
                            {/* todo title starts here  */}
                            <span className="col-9 col-lg-10 col-md-10">{todoList[i].title}</span>
                            {/* todo title ends here  */}
                            {/* todo delete button starts here  */}
                            <span className="col-1">
                                <DeleteTodo todo_index={i} />
                            </span>
                            {/* todo delete button ends here  */}
                        </div>
                    </li>
                    // todoList item ends here 
                );
            })}
            {/* todoList ends here  */}
        </>
    );
}

export default TodoList;
