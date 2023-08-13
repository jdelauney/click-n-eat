import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {Menu} from "./Menu.tsx";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../data/fakeMenu.ts";
import {useState} from "react";
import toast from "react-hot-toast";
import {AdminBoard} from "./AdminBoard.tsx";
import {AdminContext, TAdminContext} from "./context/AdminContext.tsx";

const OrderLayoutStyled = styled.div`
  
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
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(1);
  const [isAdminBoardOpen, setIsAdminBoardOpen] = useState<boolean>(true);


  const adminContextValue: TAdminContext = {
    selectedTabIndex : selectedTabIndex,
    setSelectedTabIndex: setSelectedTabIndex,
    isAdminBoardOpen: isAdminBoardOpen,
    setIsAdminBoardOpen: setIsAdminBoardOpen,
  }
  const notifyAdminMode = () => {
    toast('Mode admin activé',
      {
        icon: '🛠️',
        style: {
          borderRadius: '.5rem',
          border: "2px solid " + theme.colors.blue,
          background: theme.colors.background_dark,
          color: theme.colors.blue,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: theme.weights.regular
        },
      }
    );
  }
  const adminButtonToggleHandler = () => {
    setIsAdminMode(!isAdminMode)

    if (!isAdminMode) {
      notifyAdminMode()
    }
  }

  let {userName} = useParams()
  if (!userName) {
    userName=""
  }

  return (
    <OrderLayoutStyled>
      <div className={"container"}>
        <Navbar userName={userName} adminMode={isAdminMode} onAdminButtonToggle={adminButtonToggleHandler}/>
        <OrderPageContentStyled>
          <Menu products={...products} />
        </OrderPageContentStyled>
        <AdminContext.Provider value={adminContextValue}>
          { isAdminMode && <AdminBoard/>}
        </AdminContext.Provider>
        {/*<div className={"admin"}>
          <div className={"tabs"}>
            <div className={"tab"}>
              <FiChevronDown className={"icon"}/>
            </div>
            <div className={"tab selected"}>
              <AiOutlinePlus className={"icon"}/>
              <span className={"label"}>Ajouter un produit</span>
            </div>
            <div className={"tab"}>
              <MdModeEditOutline className={"icon"}/>
              <span className={"label"}>Modifier un produit</span>
            </div>
          </div>
          <div className={"tabPanel"}>
            TabPanel
          </div>
        </div>*/}
      </div>
    </OrderLayoutStyled>

  )
}