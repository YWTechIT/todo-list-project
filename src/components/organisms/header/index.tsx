import {memo} from "react";
import styled from "styled-components";

const HeaderWrapper = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = () => <HeaderWrapper>📍 Todo List</HeaderWrapper>

export default memo(Header);
