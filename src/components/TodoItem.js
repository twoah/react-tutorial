import React from "react";
import styled, {css} from "styled-components";

function TodoItem({id, done, text}){

    return (
        <div>{text}</div>
    );
};
export default TodoItem;