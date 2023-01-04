import React from "react";
import styled from "styled-components/macro";
import TodoItem from "./TodoItem";
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text = "프로젝트 생성하기" done={true}></TodoItem>
        </TodoListBlock>);
}

export default TodoList;