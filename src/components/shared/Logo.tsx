import styled from "styled-components";
import { theme } from "../../theme"


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
  color: ${theme.colors.primary_burger};
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 20rem;
    overflow: auto;
  }
  img {
    height: 100%; 
    width: 100%;
    max-height: 15rem;
  }

`
type LogoProps = {
  big?: boolean
}

export const Logo = ({big}: LogoProps) => {
  return (
    <LogoStyled $big={big}>
      <span>Click</span>
      <div>
        <img src="/assets/images/logo-orange.png" alt="Click and Eat"/>
      </div>
      <span>& Eat</span>
    </LogoStyled>
  )
}