import styled from "styled-components";

interface TextProps {
    checked: boolean;
}

export const ButtonStyle = styled.button`
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
    &:hover {
        background-color: #f9ede5;
    }
`;

export const TodoStyle = styled.article`
    width: 400px;
    font-size: 24px;
    margin-bottom: 16px;
    justify-content: center;
    white-space: nowrap;
    overflow: auto;
    min-width: 0;
`;

export const CheckedStyle = styled.input`
    width: 20px;
    height: 20px;
    display: inline;
`;

export const TextStyle = styled.span<TextProps>`
    display: inline;
    margin-left: 8px;
    text-decoration: ${(props) => props.checked && "line-through"};
    color: ${(props) => props.checked && "gray"};
    opacity: 87%;
`;
