import {useContext} from "react";
import {OrderContext} from "../../../Context/OrderContext.tsx";
import {ProductsEmptyMessageAdmin} from "./ProductsEmptyMessageAdmin.tsx";
import {ProductsEmptyMessageClient} from "./ProductsEmptyMessageClient.tsx";
import styled from "styled-components";
import {theme} from "../../../../../../theme";


const EmptyProductsInformationStyled = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  
  .boxInfo {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:2.1rem;

    > span {
      font-family: 'Amatic SC', cursive;
      font-size: ${theme.fonts.P4};
      color: ${theme.colors.greyBlue};
      text-transform: uppercase;

      &:first-child {
        font-weight: ${theme.weights.bold};
      }
    }
  }
`
export const ProductsEmptyMessage = () => {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <EmptyProductsInformationStyled>
      <div className={"boxInfo"} style={isModeAdmin ? { marginTop: "-12rem"} : {}}>
        { isModeAdmin ? <ProductsEmptyMessageAdmin/> : <ProductsEmptyMessageClient/> }
      </div>
    </EmptyProductsInformationStyled>
  )
}