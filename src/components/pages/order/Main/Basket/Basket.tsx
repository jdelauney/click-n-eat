import styled from "styled-components";
import {BasketHeader} from "./BasketHeader.tsx";
import {BasketProducts} from "./BasketProducts.tsx";
import {theme} from "../../../../../theme";
import {BasketFooter} from "./BasketFooter.tsx";

const BasketStyled=styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  flex-direction: column;
  border-radius: 0 0 1.5rem 0;
  box-shadow: ${theme.shadows.strong};
  
`
export const Basket = () => {
  return (
    <BasketStyled>
      <BasketHeader/>
      <BasketProducts/>
      <BasketFooter/>
    </BasketStyled>
  )
}