import styled from "styled-components";
import { theme } from "../../theme"
import {FC, MouseEventHandler} from "react";


//font-family: 'Open Sans', sans-serif;
const LogoStyled = styled.h1<{ $big?: boolean; }>`
  display:flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-family: 'Amatic SC', cursive;
  font-size: ${props => props.$big ? theme.fonts.P7 : theme.fonts.P4 };
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 4.6;
  color: ${theme.colors.primary_burger};
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    //flex: 1 1 30rem;
    overflow: auto;
  }
  img {
    height: 100%; 
    width: 100%;
    max-height: ${props => props.$big ? '15rem' : '6rem' };
  }

`
type LogoProps = {
  big?: boolean
  onClick? : MouseEventHandler
  className?: string
}

export const Logo: FC<LogoProps> = ({className, onClick, big}: LogoProps) => {
  return (
    <LogoStyled className={className} onClick={onClick} $big={big}>
      <span>Click</span>
      <div>
        <img src="/assets/images/logo-orange.png" alt="Click and Eat"/>
      </div>
      <span>& Eat</span>
    </LogoStyled>
  )
}