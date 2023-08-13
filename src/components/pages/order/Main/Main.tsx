import {Menu} from "./Menu.tsx";
import styled from "styled-components";
import {theme} from "../../../../theme";
import {useState} from "react";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../../data/fakeMenu.ts";

const MainStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};
  overflow: auto;
`
export const Main = () => {

  const [products, setProducts] = useState<MenuItem[]>(fakeMenu);

  return (
    <MainStyled>
      <Menu products={...products} />
    </MainStyled>
  )
}