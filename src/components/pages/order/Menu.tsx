import styled from "styled-components";
import {PropsWithChildren} from "react";

const MenuStyled = styled.section`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(min(23rem, 100%), 1fr));
  row-gap: 6rem;
  column-gap: 8.5rem;
  padding-inline: 9.5rem;
  padding-block: 5rem;
`
export const Menu = ({children}: PropsWithChildren) => {
  return (
    <MenuStyled>
      {children}
    </MenuStyled>
  )
}