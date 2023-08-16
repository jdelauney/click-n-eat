import styled from "styled-components";
import {theme} from "../../../theme";
import {forwardRef, InputHTMLAttributes, ReactNode} from "react";
import {inputTheme} from "../../../theme/inputTheme.ts";


type StyledInputProps = {
  variant?: string
  size?: string
}

const InputContainerStyled = styled.div<StyledInputProps>`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  align-items: center;
  width:100%;
  padding-inline:  ${({size}) => size && size !== "" ? inputTheme.size[size].paddingInline : inputTheme.size["default"].paddingInline};
  padding-block: ${({size}) => size && size !== "" ? inputTheme.size[size].paddingBlock : inputTheme.size["default"].paddingBlock};
  border-radius: .5rem;
  background-color: ${({variant}) => variant && variant !== "" ? inputTheme.variant[variant].colors.bg : inputTheme.variant["default"].colors.bg};
  font-size: ${({size}) => size && size !== "" ? inputTheme.size[size].fontSize : inputTheme.size["default"].fontSize};
  line-height: ${({size}) => size && size !== "" ? inputTheme.size[size].lineHeight : inputTheme.size["default"].lineHeight};
  
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: ${theme.colors.greyBlue};
  }

  input {
    appearance: none;
    border: none;
    width: 100%;
    outline: none;
    padding: .4rem;
    background-color: ${({variant}) => variant && variant !== "" ? inputTheme.variant[variant].colors.bg : inputTheme.variant["default"].colors.bg};
  }
`

type InputTextProps = {
  type?: string
  name: string,
  ariaLabel: string;
  Icon?: ReactNode,
} & StyledInputProps & InputHTMLAttributes<HTMLInputElement>


// eslint-disable-next-line react/display-name
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({type="text", name, ariaLabel, Icon, variant, size, ...rest}: InputTextProps, ref) => {
    return (
      <InputContainerStyled variant={variant} size={size}>
        {Icon && Icon}
        <input ref={ref} type={type} id={name} name={name} aria-label={ariaLabel} {...rest}/>
      </InputContainerStyled>
    )
  }
)