import styled from "styled-components";
import {ProductCard} from "./ProductCard.tsx";
import {useContext} from "react";
import {OrderContext} from "../../Context/OrderContext.tsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {productCardAnimation} from "../../../../../theme/animations.ts";

const ProductsStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(23rem, 100%), 1fr));
  row-gap: 6rem;
  column-gap: 8.5rem;
  padding-inline: 9.5rem;
  padding-block: 5rem;
  height:100%;
  max-height: 100%;
  overflow: auto;
  
  ${productCardAnimation}
`

export const Products = () => {

  const { products } = useContext(OrderContext)

  return (
    <TransitionGroup component={ProductsStyled} appear={true}>
      {
        products.map((item) => {
          return (
            <CSSTransition classNames={"menu-animation"} key={item.id} timeout={300}>
              <ProductCard key={item.id} item={item}/>
            </CSSTransition>
          )
        })
      }

    </TransitionGroup>
  )
}