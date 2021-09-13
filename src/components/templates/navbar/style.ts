import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  padding: 12px 16px;
`;
