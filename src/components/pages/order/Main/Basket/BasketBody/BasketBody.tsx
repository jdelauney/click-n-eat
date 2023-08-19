import styled from "styled-components";
import {theme} from "../../../../../../theme";
// import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";

import {MenuItem} from "../../../../../../data/fakeMenu.ts";
import {useContext} from "react";
import {OrderContext} from "../../../Context/OrderContext.tsx";
import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {BasketCard} from "./BasketCard.tsx";
import {basketCardAnimation} from "../../../../../../theme/animations.ts";

const BasketBodyStyled = styled.section`
  
  
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  overflow: auto;
  max-height: 68.7vh;

  .products {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 1.6rem;
    padding-block: 2rem;
  }

  ${basketCardAnimation}
`
export const BasketBody = () => {
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

    <BasketBodyStyled>
      { (basket && basket.length > 0)
        ? (
          <TransitionGroup className={"products"}>
            { basket.map( (item) => {
                const basketProduct = findProduct(item.productId)
                return (
                  basketProduct &&
                    <CSSTransition
                        appear={true}
                        leave={true}
                        key={item.id}
                        classNames={"basketCardsAnimation"}
                        timeout={500}
                    >
                      <BasketCard
                                          product={basketProduct}
                                          quantity={item.quantity}
                                          onDelete={() => deleteBasketItem(item.id)}
                                          className={"card"}
                      />
                    </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        ) : <BasketEmptyMessage/>
      }

    </BasketBodyStyled>
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