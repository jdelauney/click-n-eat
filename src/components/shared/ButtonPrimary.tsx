import styled from "styled-components";
import {theme} from "../../theme";
import {ButtonHTMLAttributes, ReactNode} from "react";


const ButtonStyled = styled.button<{ $fullWidth?: boolean; }>`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: ${props => props?.$fullWidth ? '100%' : 'auto'};
  margin-top: 1.8rem;
  padding: 1.8rem;
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};
  color: #fff;
  border-radius: .5rem;
  transition: all .25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: ${theme.colors.primary_burger};
  }
`

type ButtonProps = {
  label:string,
  IconAfter?: ReactNode,
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonPrimary = ({label, IconAfter, fullWidth, ...rest}: ButtonProps) => {
  return (
    <ButtonStyled $fullWidth={fullWidth} {...rest} >
      <span>{label}</span>
      {IconAfter && IconAfter}
    </ButtonStyled>
  )
}