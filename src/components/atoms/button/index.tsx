import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const ButtonStyle = styled.button`
    width: 24px;
    height: 24px;
    font-size: 16px;
    margin-left: 8px;
    border: 1.5px solid #fee6d5;
    background-color: white;
    font-weight: bold;
    border-radius: 12px;
    color: #ff9c7e;
    cursor: pointer;
    &:hover{
        background-color: #f9ede5;
    }
`

const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
};

export default Button;
