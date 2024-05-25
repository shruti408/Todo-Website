import { useContext } from "react";
import TodoContext from "../context/todoContext";

export default function TodoStatus(todo_index) {

    const i = todo_index.todo_index;
    let { todoList, setTodoList } = useContext(TodoContext);

    function handleChange() {
        const copyTodoList = [...todoList];
        copyTodoList[i].todoCompleted = !copyTodoList[i].todoCompleted;
        setTodoList(copyTodoList);
    }

    return (
        <>
            {/* todo check status starts here  */}
            <div className="form-check">
                <input
                    className="form-check-input p-2"
                    type="checkbox"
                    onChange={handleChange}
                    id="todostatus"
                    checked={todoList[i].todoCompleted}
                />
                <label className="form-check-label" htmlFor="todostatus">
                </label>
            </div>
            {/* todo check status ends here  */}
        </>
    )
}