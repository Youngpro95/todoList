import React from "react";
import { IoIosCheckboxOutline, IoIosTrash } from "react-icons/io";
import styled, { css } from "styled-components";

const Remove = styled.div`
  display: none;
  justify-content: center;
  font-size: 34px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const Check = styled.div`
  font-size: 40px;
  display: flex;
  cursor: pointer;
  &:hover {
    color: green;
  }

  ${props =>
    props.done &&
    css`
    color : green;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 34px;
  margin-left: 5px;
  margin-bottom: 3px;
  ${(props) =>
    props.done &&
    css`
      color: green;
      text-decoration: line-through;
    `};
`;

const TodoItem = ({ id, done, text }) => {
  return (
    <TodoItemBlock>
      <Check done={done}>
        <IoIosCheckboxOutline />
      </Check>
      <Text done={done}>{text}</Text>
      <Remove>
        <IoIosTrash />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
