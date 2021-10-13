import { ReactComponent as SunIcon } from "../../../assets/sun.svg";
import { ReactComponent as MoonIcon } from "../../../assets/moon.svg";
import { ToggleContainer } from "./style";

interface ToggleProps {
    isLight: "light" | "dark";
    toggleTheme: () => void;
}

const Toggle = ({ isLight, toggleTheme }: ToggleProps) => {

    return (
        <ToggleContainer isLight={isLight} onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

export default Toggle;
