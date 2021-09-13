import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        navBarTitle: string;
        bodyBg: string;
        bgColor: string;
        text: string;
        borderColor: string;
        footerTextColor: string;
        contrastColor: string;
        gradient: string;
        toggleBorder: string;
      }
  }

interface DefaultTypes {
  lightTheme: DefaultTheme;
  darkTheme: DefaultTheme;
}

export const lightTheme: DefaultTheme = {
  navBarTitle: "#d6d8da",
  bodyBg: "#FFFFF",
  bgColor: "#111111",
  text: "black",
  borderColor: "#FFF",
  footerTextColor: "#7E848A",
  contrastColor: "#2d2d2d",
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  toggleBorder: '#FFF',
};

export const darkTheme: DefaultTheme = {
  navBarTitle: "#d6d8da",
  bodyBg: "#121212",
  bgColor: "#2d2d2d",
  text: "#f4f6f8",
  borderColor: "#6B8096",
  footerTextColor: "#7E848A",
  contrastColor: "#FFFFF",
  gradient: 'linear-gradient(#091236, #1E215D)',
  toggleBorder: '#6B8096',
};

export const theme: DefaultTypes = {
  lightTheme,
  darkTheme,
};

export default theme;
