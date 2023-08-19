import {Products} from "./Products/Products.tsx";
import styled from "styled-components";
import {theme} from "../../../../theme";
import {useContext, useEffect, useState} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {ProductsEmptyMessage} from "./Products/ProductsEmptyMessage/ProductsEmptyMessage.tsx";
import {AdminBoard} from "./AdminBoard/AdminBoard.tsx";
import {Basket} from "./Basket/Basket.tsx";

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  max-height:100%;
  height: 100%;
  overflow: hidden;
  
  .main-container {
    height:100%;
    overflow: hidden;
    position: relative;
  }
`
export const Main = () => {

  const [isProductsEmpty, setIsProductsEmpty] = useState(false);
  const {isModeAdmin,  products} = useContext(OrderContext)

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
      <div className={"main-container"}>
        { isProductsEmpty
          ? (
            <ProductsEmptyMessage/>
          )
          : (
            <Products/>
          )
        }
        { isModeAdmin && <AdminBoard/>}
      </div>
      <Basket/>
    </MainStyled>
  )
}