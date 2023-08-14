import {Menu} from "./Menu.tsx";
import styled from "styled-components";
import {theme} from "../../../../theme";
import {useContext} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {EmptyProductsInformation} from "./EmptyProductsInformation.tsx";

const MainStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};
  overflow: auto;
`
export const Main = () => {

  const { products } = useContext(OrderContext)


  return (
    <MainStyled>
      { products.length > 0
        ? (
          <Menu products={products} />
        )
        : (
          <EmptyProductsInformation/>
        )
      }
    </MainStyled>
  )
}