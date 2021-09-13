import styled from "styled-components";

interface ToggleContainerProps{
  isLight: "light" | "dark";
}

export const ToggleContainer = styled.button<ToggleContainerProps>`
    display: flex;
    /* justify-content: space-between; */
    background: ${(props) => props.theme.gradient};
    border: 2px solid ${(props) => props.theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.5rem;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 5rem;
    height: 2.8rem;

    svg {
        height: auto;
        width: 1.7rem;
        transition: all 0.3s linear;

        // sun icon
      &:first-child {
      transform: ${(props) => props.isLight === "light" ? 'translateY(0)' : 'translateY(100px)'};
    } 

        // moon icon
      &:nth-child(2) {
      transform: ${(props) => props.isLight === "light" ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;