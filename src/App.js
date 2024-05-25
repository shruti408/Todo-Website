import TodoContextProvider from "./context/todoContextProvider";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

export default function App() {
  
  return (

    <TodoContextProvider>
      <div className="container">
        {/* add-task bar starts here  */}
        <h2 className="text-center m-2 mb-3">Welcome to Todo-website</h2>
        <AddTodo />
        {/* add-task bar ends here  */}
        <h3 className="mx-2 my-4">
          <u>Todo List</u>
        </h3>
        {/* todoList starts here  */}
        <TodoList />
        {/* todoList ends here  */}
      </div>
    </TodoContextProvider>
    
  );
}


