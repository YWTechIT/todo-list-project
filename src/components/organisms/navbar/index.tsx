import {memo} from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
    align-self: flex-end;
`

const NavBar = () => {
    return(
        <NavBarWrapper>🌝 🌚 제작 중 입니다...</NavBarWrapper>
)}

export default memo(NavBar);
