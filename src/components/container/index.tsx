import React from "react";
import styled from "styled-components";

interface ContainerProps {
    children: React.ReactNode;
}
const ContainerWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px auto;
    min-width: 200px;
`

const Container = ({children}: ContainerProps) => <ContainerWrapper>{children}</ContainerWrapper>

export default Container;
