import styled from "styled-components";
import {ButtonHTMLAttributes, ReactNode} from "react";
import {buttonTheme} from "../../../theme/buttonTheme.ts";

type StyledButtonProps = {
  shape?: string
  variant?: string
  size?: string
  fullwidth?: string
}

const ButtonStyled = styled.button<StyledButtonProps>`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: center;                
  justify-content: center;
  width: ${({fullwidth}) => fullwidth && fullwidth.toLowerCase() === "true" ? '100%' : 'auto'};
  padding-inline: ${({size}) => size && size !== "" ? buttonTheme.size[size].paddingInline : "2.65rem"};
  padding-block: ${({size}) => size && size !== "" ? buttonTheme.size[size].paddingBlock : "1.2rem"};

  background-color: ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.bg : buttonTheme.variant["primary"].colors.bg};
  border: 1px solid ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.bc : buttonTheme.variant["primary"].colors.bc};
  color: ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.fg : buttonTheme.variant["primary"].colors.fg};
  border-radius: ${({shape}) => shape && shape !== "" ? buttonTheme.shape[shape].borderRadius : ".5rem" };
  transition: all .25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.hover.bg : buttonTheme.variant["primary"].colors.hover.bg};
    color: ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.hover.fg : buttonTheme.variant["primary"].colors.hover.fg};
    border-color: ${({variant}) => variant && variant !== "" ? buttonTheme.variant[variant].colors.hover.bc : buttonTheme.variant["primary"].colors.hover.bc};
  }
`

type ButtonProps = {
  label?: string,
  IconAfter?: ReactNode,
  fullwidth?: string,
  className?: string
} & StyledButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({className, label, IconAfter, fullwidth, shape, variant, size, ...rest}: ButtonProps) => {
  return (
    <ButtonStyled shape={shape} variant={variant} size={size} fullwidth={fullwidth}  className={className} {...rest} >
      {label && <span>{label}</span>}
      {IconAfter && IconAfter}
    </ButtonStyled>
  )
}