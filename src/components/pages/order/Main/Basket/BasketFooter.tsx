import styled from "styled-components";
import {theme} from "../../../../../theme";

const BasketFooterStyled = styled.footer`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.dark};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P2};
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.white};
  text-transform: uppercase;
`
export const BasketFooter = () => {
  return (
    <BasketFooterStyled>
      Codé avec ❤️ et React.JS
    </BasketFooterStyled>
  )
}