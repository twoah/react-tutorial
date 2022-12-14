import React, {useState} from "react";
import styled, {css} from "styled-components";
import {MdAdd} from "react-icons/md";

const Input = styled.input`
    padding : 12px; 
    border-radius : 4px; 
    border : 1px solid #dee2e6; 
    width: 100%;
    outline : none;
    font-size : 18px; 
    box-sizing: border-box;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    cursor : pointer; 
    width : 80px; 
    height : 80px; 
    font-size: 60px;
    display : block; 
    position: absolute;
    left : 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color : white; 
    border-radius : 50%; 
    border : none; 
    outline : none; 
    display : flex; 
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;
    
    ${props => props.open && css `
        background : #ff6d6b; 
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
    
`;
function TodoCreate(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    return(
        <div>
            <InsertFormPositioner>
                <InsertForm>
                    {open && (
                        <Input placeholder = "할 일을 입력하세요"></Input>
                    )}

                </InsertForm>
            </InsertFormPositioner>
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </div>
    );

}
export default TodoCreate;