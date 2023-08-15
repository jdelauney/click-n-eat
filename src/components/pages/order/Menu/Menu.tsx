import styled from "styled-components";
import {CardMenuItem} from "./CardMenuItem.tsx";
import {useContext} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";

const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(23rem, 100%), 1fr));
  row-gap: 6rem;
  column-gap: 8.5rem;
  padding-inline: 9.5rem;
  padding-block: 5rem;
`

export const Menu = () => {

  const { products } = useContext(OrderContext)

  return (
    <MenuStyled>
      {
        products.map((item) => {
          return <CardMenuItem key={item.id} item={item}/>
        })
      }
    </MenuStyled>
  )
}