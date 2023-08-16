import styled from "styled-components";
import {theme} from "../../../../../theme";

const BasketEmptyMessageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P4};
  
`
export const BasketEmptyMessage = () => {
  return (
    <BasketEmptyMessageStyled>
      Votre commande est vide.
    </BasketEmptyMessageStyled>
  )
}