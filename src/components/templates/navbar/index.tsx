import { memo } from "react";
import { ToggleTheme } from "../../index";
import { NavBarWrapper } from "./style";

interface NavBarProps {
  isLight: "light" | "dark";
  toggleTheme: () => void;
}

const NavBar = ({ isLight, toggleTheme }: NavBarProps) => {
  return (
    <NavBarWrapper>
      <div>YWTechIT</div>
      <ToggleTheme isLight={isLight} toggleTheme={toggleTheme} />
    </NavBarWrapper>
  );
};

export default memo(NavBar);
