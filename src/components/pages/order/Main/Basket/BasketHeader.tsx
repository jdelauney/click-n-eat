import styled from "styled-components";
import {theme} from "../../../../../theme";


const BasketHeaderStyled = styled.header`
  display:flex;
  flex-flow: row nowrap;
  width: 35rem;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.6rem;
  padding-block: 1.2rem;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P4};
  color: ${theme.colors.primary};
  text-transform: uppercase;
  background-color: ${theme.colors.dark};
  
  .price {
    font-weight: ${theme.weights.bold};
    letter-spacing: .2rem;
  }
`
export const BasketHeader = () => {
  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className={"price"}>0,00 €</span>
    </BasketHeaderStyled>
  )
}