import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {useState} from "react";
import {AdminBoard} from "./AdminBoard/AdminBoard.tsx";
import {AdminContext, TAdminContext} from "./Context/AdminContext.tsx";
import {OrderContext, TOrderContext} from "./Context/OrderContext.tsx";
import {Main} from "./Main/Main.tsx";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../data/fakeMenu.ts";

const OrderPageStyled = styled.div`
  
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 20px 5px;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  
  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    max-height: 95vh;
    overflow: hidden;
  }
`

export const OrderPage = () => {

  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [currentAdminTabIndex, setCurrentAdminTabIndex] = useState<string>("tab-1");
  const [isAdminBoardOpen, setIsAdminBoardOpen] = useState<boolean>(true);
  const [isAdminUpdateMode, setIsAdminUpdateMode] = useState(false);

  const [products, setProducts] = useState<MenuItem[]>(fakeMenu);

  const adminContextValue: TAdminContext = {
    currentAdminTabIndex : currentAdminTabIndex,
    setCurrentAdminTabIndex: setCurrentAdminTabIndex,
    isAdminBoardOpen: isAdminBoardOpen,
    setIsAdminBoardOpen: setIsAdminBoardOpen,
  }

  const orderContextValue: TOrderContext = {
    isModeAdmin: isAdminMode,
    setIsModeAdmin: setIsAdminMode,
    products: products,
    setProducts: setProducts,
    isAdminUpdateMode: isAdminUpdateMode,
    setIsAdminUpdateMode: setIsAdminUpdateMode,
  }

  let {userName} = useParams()
  if (!userName) {
    userName=""
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className={"container"}>
          <Navbar userName={userName}/>
          <AdminContext.Provider value={adminContextValue}>
          <Main/>
            { isAdminMode && <AdminBoard/>}
          </AdminContext.Provider>
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}