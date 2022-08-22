import "./App.css";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";
import TodoList from "./TodoList";


const App = () => {
  return (
    <>
      <TodoTemplateWindow>
        <TodoInfoTime/>
        <TodoList/>
      </TodoTemplateWindow>
    </>
  );
};

export default App;
