
import { TodoTypes } from "../../../types";
import { FooterStyle } from "./style";

interface FooterProps {
    todos: TodoTypes[];
}

const Footer = ({todos}: FooterProps) => {
    return(
        <FooterStyle>You have been {todos.length} pending tasks</FooterStyle>
    )
}

export default Footer;