import styled from "styled-components";
import {theme} from "../../theme";
import {InputHTMLAttributes, ReactNode} from "react";

const InputContainerStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  align-items: center;
  width:100%;
  padding-inline: 2.4rem;
  padding-block: 1.8rem;
  border-radius: .5rem;
  background-color: #fff;

  .icon {
    //width:1.5rem;
    //aspect-ratio: 1/1;
    color: ${theme.colors.greyBlue};
  }

  input {
    appearance: none;
    border: none;
    width: 100%;
    //padding-block: 1rem;
    //padding-inline: 1rem;
    border-radius: .35rem;
  }
`

type InputTextProps = {
  name: string,
  ariaLabel: string;
  Icon?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>
export const InputText = ({name, ariaLabel, Icon,  ...rest}: InputTextProps) => {
  return (
    <InputContainerStyled>
      {Icon && Icon}
      <input type="text" id={name} name={name} aria-label={ariaLabel} {...rest}/>
    </InputContainerStyled>
  )
}