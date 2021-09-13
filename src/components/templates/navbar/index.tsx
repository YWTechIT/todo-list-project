import { memo } from "react";
import { ToggleTheme } from "../../index";
import { NavBarWrapper } from "./style";
import styled from "styled-components";

interface NavBarProps {
  isLight: "light" | "dark";
  toggleTheme: () => void;
}

const NavTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.navBarTitle};
`

const NavBar = ({ isLight, toggleTheme }: NavBarProps) => {
  return (
    <NavBarWrapper>
      <NavTitle>YWTechIT</NavTitle>
      <ToggleTheme isLight={isLight} toggleTheme={toggleTheme} />
    </NavBarWrapper>
  );
};

export default memo(NavBar);
