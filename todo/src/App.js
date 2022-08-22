import "./App.css";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoInsert from "./TodoInsert";

const App = () => {
  return (
    <>
      <TodoTemplateWindow>
        <TodoInfoTime/>
        <TodoInsert/>
      </TodoTemplateWindow>
    </>
  );
};

export default App;
