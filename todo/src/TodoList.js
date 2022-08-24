import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodolistBlock = styled.div`
  width: 100%;
`;

function TodoList({ todos }) {
  return (
    <TodolistBlock>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </TodolistBlock>
  );
}

export default TodoList;
