import styled from "styled-components";
import {ProductCard} from "./ProductCard.tsx";
import {useContext} from "react";
import {OrderContext} from "../../Context/OrderContext.tsx";

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
`

export const Products = () => {

  const { products } = useContext(OrderContext)

  return (
    <ProductsStyled>
      {
        products.map((item) => {
          return <ProductCard key={item.id} item={item}/>
        })
      }

    </ProductsStyled>
  )
}