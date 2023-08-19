import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {useRef, useState} from "react";
import {AdminContext, TAdminContext} from "./Context/AdminContext.tsx";
import {OrderContext, TOrderContext} from "./Context/OrderContext.tsx";
import {Main} from "./Main/Main.tsx";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../data/fakeMenu.ts";
import {BasketItem} from "../../../data/fakeBasket.ts";
import {MEDIUM as fakeBasket} from "../../../data/fakeBasket.ts";

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
  const [currentAdminTabIndex, setCurrentAdminTabIndex] = useState<string>("tab-add-product");
  const [isAdminBoardOpen, setIsAdminBoardOpen] = useState<boolean>(true);
  const [basket, setBasket] = useState<BasketItem[]>(fakeBasket);


  const [products, setProducts] = useState<MenuItem[]>(fakeMenu);
  const [currentSelectedProduct, setCurrentSelectedProduct] = useState<MenuItem|null>(null);

  const inputNameRef = useRef<HTMLInputElement>(null);

  const adminContextValue: TAdminContext = {
    currentAdminTabIndex : currentAdminTabIndex,
    setCurrentAdminTabIndex: setCurrentAdminTabIndex,
    isAdminBoardOpen: isAdminBoardOpen,
    setIsAdminBoardOpen: setIsAdminBoardOpen,
    currentSelectProduct: currentSelectedProduct,
    setCurrentSelectedProduct: setCurrentSelectedProduct,
    inputNameRef : inputNameRef
  }

  const orderContextValue: TOrderContext = {
    isModeAdmin: isAdminMode,
    setIsModeAdmin: setIsAdminMode,
    products: products,
    setProducts: setProducts,
    basket: basket,
    setBasket: setBasket
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
          </AdminContext.Provider>
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}