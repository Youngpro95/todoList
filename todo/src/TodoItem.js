import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";

const TodoListBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
  
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  
  &:checked {
    display: none;
    svg {
      color: #22b8cf;
    }
    color: #abd5bd;
    text-decoration: line-through;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <TodoListBlock>
      <Checkbox>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text>{text}</Text>
      </Checkbox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListBlock>
  );
};

export default TodoListItem;
