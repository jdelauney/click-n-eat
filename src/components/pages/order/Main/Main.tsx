import {Products} from "../Products/Products.tsx";
import styled from "styled-components";
import {theme} from "../../../../theme";
import {useContext, useEffect, useState} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {EmptyProductsInformation} from "../Products/EmptyProductsInformation.tsx";

const MainStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};
  overflow: auto;
`
export const Main = () => {

  const [isProductsEmpty, setIsProductsEmpty] = useState(false);
  const {products} = useContext(OrderContext)

  useEffect(() => {
    if (products.length === 0) {
      setIsProductsEmpty(true)
    } else if ((products.length !== 0) && isProductsEmpty) {
      setIsProductsEmpty(false)
    }
    return () => {}
  }, [products, isProductsEmpty]);


  return (
    <MainStyled>
      { isProductsEmpty
        ? (
          <EmptyProductsInformation/>
        )
        : (
          <Products/>
        )
      }
    </MainStyled>
  )
}