import styled from "styled-components";
import {theme} from "../../../../../../theme";
// import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";

import {MenuItem} from "../../../../../../data/fakeMenu.ts";
import {useContext} from "react";
import {OrderContext} from "../../../Context/OrderContext.tsx";
import {BasketEmptyMessage} from "./BasketEmptyMessage.tsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {BasketCard} from "./BasketCard.tsx";

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

  .card-container-appear {
      transform: translateX(-100px);
      opacity: 0;
  }

  .card-container-appear-active {
      transition: all .5s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    
  }
  
  .card-container-enter {
      transform: translateX(-100px);
      opacity: 0;
  }

  .card-container-enter-active {
      transition: all .5s ease-in-out;
      transform: translateX(0);
      opacity: 1;
  }
    //.card-container-done {
    //  transform: translateX(100px);
    //  opacity: 1;
    //}

  .card-container-exit {
      transform: translateX(0);
      opacity: 1;
    
  }

  .card-container-exit-active {
      transition: all .5s ease-in-out;
      transform: translateX(100px);
      opacity: 0;
  }

  .card-container-leave {
    transform: translateX(0);
    opacity: 1;

  }

  .card-container-leave-active {
    transition: all .5s ease-in-out;
    transform: translateX(100px);
    opacity: 0;
  }
  
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
                        classNames={"card-container"}
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