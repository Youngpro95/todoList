import React,{useState} from "react";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const App = () => {
  const [ todos, setTods]=useState([
    {
      id:1,
      text: "test Todo",
      checked : true,
    },
    {
      id:2,
      text: "test Todo",
      checked : false,
    }
  ])

  return (
    <>
      <TodoTemplateWindow>
        <TodoInfoTime/>
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplateWindow>
    </>
  );
};

export default App;
