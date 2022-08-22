import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const TodoInsertForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const InsertInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  &:placeholder {
    color: #bbb;
  }
`;

const InsertButton = styled.button`
  background: #868e96;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = () => {
  return (
    <TodoInsertForm>
      <InsertInput placeholder="해야할 일 입력" />
      <InsertButton type={"submit"}>
        <MdAdd />
      </InsertButton>
    </TodoInsertForm>
  );
};

export default TodoInsert;
