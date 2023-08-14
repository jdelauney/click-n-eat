import styled from "styled-components";
import {MenuItem} from "../../../../data/fakeMenu.ts";
import {CardMenuItem} from "./CardMenuItem.tsx";

const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(23rem, 100%), 1fr));
  row-gap: 6rem;
  column-gap: 8.5rem;
  padding-inline: 9.5rem;
  padding-block: 5rem;
`

type MenuProps = {
  products: MenuItem[]
}
export const Menu = ({products}: MenuProps) => {
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