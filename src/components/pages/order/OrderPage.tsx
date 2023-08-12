import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {Menu} from "./Menu.tsx";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../data/fakeMenu.ts";
import {useState} from "react";

const OrderLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 20px 5px;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  
  > .container {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    max-height: 95vh;
    
  }
`

const OrderPageContentStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};
  overflow: auto;
`

export const OrderPage = () => {

  const [products, setProducts] = useState<MenuItem[]>(fakeMenu);
  const [adminMode, setAdminMode] = useState<boolean>(false);

  const adminButtonToggleHandler = () => {
    setAdminMode(() => !adminMode)
  }

  let {userName} = useParams()
  if (!userName) {
    userName=""
  }

  return (
    <OrderLayoutStyled>
      <div className={"container"}>
        <Navbar userName={userName} adminMode={adminMode} onAdminButtonToggle={adminButtonToggleHandler}/>
        <OrderPageContentStyled>
          <Menu products={...products} />
        </OrderPageContentStyled>
      </div>
    </OrderLayoutStyled>
  )
}