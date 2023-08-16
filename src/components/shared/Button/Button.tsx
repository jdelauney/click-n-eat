import styled from "styled-components";
import {theme} from "../../../theme";
import {ButtonHTMLAttributes, ReactNode} from "react";

type StyledTheme = {
  fg: string,
  bg: string,
  hoverFg: string,
  hoverBg: string,
  padding: string
}

const ButtonStyled = styled.button<{ $fullWidth?: boolean  }>`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: ${props => props?.$fullWidth ? '100%' : 'auto'};
  padding: ${({ theme }) => theme?.padding as string};

  background-color: ${({ theme }) => theme?.bg as string}; 
  border: 1px solid ${({ theme }) => theme?.bg as string};
  color: ${({ theme }) => theme?.fg as string};
  border-radius: .5rem;
  transition: all .25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme?.hoverBg as string};

    color: ${({ theme }) => theme?.hoverFg as string};
  }
`
ButtonStyled.defaultProps = {
  theme:{
    bg: theme.colors.primary_burger,
    fg: theme.colors.white,
    hoverBg: theme.colors.white,
    hoverFg: theme.colors.primary_burger,
    padding: "1.8rem",
  }
}

export const BtnSuccess: StyledTheme = {
  bg: theme.colors.success,
  fg: theme.colors.white,
  hoverBg: theme.colors.white,
  hoverFg: theme.colors.success,
  padding: "1rem 2.9rem",
}

type ButtonProps = {
  label?: string,
  IconAfter?: ReactNode,
  fullWidth?: boolean,
  className?: string
  theme?: StyledTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({className, label, IconAfter, fullWidth, theme, ...rest}: ButtonProps) => {
  return (
    <ButtonStyled $fullWidth={fullWidth} theme={theme ? theme : undefined} className={className} {...rest} >
      {label && <span>{label}</span>}
      {IconAfter && IconAfter}
    </ButtonStyled>
  )
}