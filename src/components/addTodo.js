import { useState, useContext, useEffect } from "react";
import TodoContext from "../context/todoContext";

function AddTodo() {
    let [todo, setTodo] = useState("");
    let { todoList, setTodoList } = useContext(TodoContext);

    useEffect(()=>{
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList])
    
    function handleAddTodo(e) {
        e.preventDefault();
        if (todo === "") {
            return;
        }

        for (var j = 0; j < todoList.length; j++) {
            if (todoList[j].title === todo) {
                setTodo("");
                alert("already present, add another todo");
                return;
            }
        }
        const copyTodoList = [...todoList, { id: Date.now(), title: todo, todoCompleted: false }];
        setTodoList(copyTodoList);
        setTodo("");
    }

    return (
        <>
            {/* add-todo starts here  */}
            <div className="container">
                <form onSubmit={handleAddTodo}>
                    <div className="input-group">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="type todo here"
                            id="addtodo"
                            aria-describedby="addtodo"
                            onChange={(e) => setTodo(e.target.value)}
                            value={todo}
                        />
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {/* add-todo ends here  */}
        </>
    )
}
export default AddTodo;