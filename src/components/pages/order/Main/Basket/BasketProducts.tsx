import styled from "styled-components";
import {theme} from "../../../../../theme";
// import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";
import {BasketProductCard} from "./BacketProductCard.tsx";
import {MenuItem} from "../../../../../data/fakeMenu.ts";
import {useContext} from "react";
import {OrderContext} from "../../Context/OrderContext.tsx";
import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";

const BasketProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  gap: 2rem;
  padding-inline: 1.6rem;
  padding-block: 2rem;
  overflow: auto;
  max-height: 68.7vh;
`
export const BasketProducts = () => {
  const {basket, setBasket, products } = useContext(OrderContext)
  const findProduct = (id: number): MenuItem|undefined => {
    return products.find((product) => id === product.id )
  }

  const deleteBasketItem = (basketItemId: string) => {
    const newBasket = basket.filter((product) => {
      return product.id !== basketItemId
    })
    setBasket(newBasket)
  }

  return (
    <BasketProductsStyled>
      { (basket && basket.length > 0)
        ? (
          basket.map( (item) => {
            const basketProduct = findProduct(item.productId)
            return (
              basketProduct &&
              <BasketProductCard  key={item.id}
                                  product={basketProduct}
                                  quantity={item.quantity}
                                  onDelete={() => deleteBasketItem(item.id)}
              />
            )
          })
        ) : <BasketEmptyMessage/>
      }

    </BasketProductsStyled>
  )
}


/*
      {
        (basket && basket.length > 0)
          ? (

          )
          : (

          )
      }

 */