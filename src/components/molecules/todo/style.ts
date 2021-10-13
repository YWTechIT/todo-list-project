import styled from "styled-components";

interface TextProps {
    checked: boolean;
}

export const ButtonStyle = styled.button`
    width: 24px;
    height: 24px;
    font-size: 16px;
    margin-left: 8px;
    border: 1px solid #6B8096;
    background-color: white;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
        background-color: #c3ccd5;
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
