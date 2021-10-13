import React from "react";
import { ContainerWrapper } from "./style";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => <ContainerWrapper>{children}</ContainerWrapper>

export default Container;
