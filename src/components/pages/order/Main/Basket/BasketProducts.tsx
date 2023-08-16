import styled from "styled-components";
import {theme} from "../../../../../theme";
import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";

const BasketProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
`
export const BasketProducts = () => {
  return (
    <BasketProductsStyled>
      <BasketEmptyMessage/>
    </BasketProductsStyled>
  )
}