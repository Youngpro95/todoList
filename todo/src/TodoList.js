import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem"

const TodolistBlock = styled.div`
flex : 1;
padding :20px 25px;
background : gray;
`;

function TodoList() {
  return <TodolistBlock>
    <TodoItem text="test" done={true}></TodoItem>
    <TodoItem text="test2" done={false}></TodoItem>
  </TodolistBlock>
}

export default TodoList;