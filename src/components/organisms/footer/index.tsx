import styled from "styled-components";
import { TodoTypes } from "../../../types";

interface FooterProps {
    todos: TodoTypes[];
}

const FooterStyle = styled.footer`
    margin-top: -8px;
    padding: 0px 8px;
    color: ${(props) => props.theme.footerTextColor};
`
const Footer = ({todos}: FooterProps) => {
    return(
        <FooterStyle>You have been {todos.length} pending tasks</FooterStyle>
    )
}

export default Footer;