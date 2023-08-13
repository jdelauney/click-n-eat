import {Button} from "./Button.tsx";
import {TiDelete} from "react-icons/ti";
import styled from "styled-components";
import {theme} from "../../theme";
import {ButtonHTMLAttributes} from "react";

const DeleteButtonStyled = styled(Button)`
  border-radius: 50%;
  padding:0;
  width: 3rem;
  height: 3rem; 
  border: none;
  background-color: transparent;
  
  > .icon {
    width:100%;
    height: 100%;
    fill: ${theme.colors.red};
    stroke: ${theme.colors.white};
  }
  
  &:hover > .icon {
    fill: ${theme.colors.redSecondary};
  }
`

type DeleteButtonProps = {
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export const DeleteButton = ({className, ...rest}: DeleteButtonProps) => {
  return (
    <DeleteButtonStyled label={""} IconAfter={<TiDelete className={"icon"}/>} className={className} {...rest}/>
  )
}