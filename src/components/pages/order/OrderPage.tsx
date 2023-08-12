import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {Menu} from "./Menu.tsx";
import {fakeMenu2 as fakeMenu, MenuItem} from "../../../data/fakeMenu.ts";
import {useState} from "react";
import toast from "react-hot-toast";
import {FiChevronDown} from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";

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

    > .admin {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      left: 0;
      bottom:0;
      border-radius: 0 0 1.5rem 1.5rem;
      transform: translateY(calc(100% - 4.3rem)); 
      
      
      &.open {
        transform: translateY(0);
      }
      
      .tabs {
        display: flex;
        flex-flow: row nowrap;
        padding-inline-start: 7rem;
        overflow: hidden;
        height: inherit; //fix display bug with use of transform and flex
      }
      
      .tab {
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: 1.3rem; 
        height: 4.3rem;
        padding-inline: 2.2rem 2.3rem;
        padding-block: 1rem 1.1rem;
        background-color: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        border: 1px solid ${theme.colors.greyLight};
        border-radius: .5rem .5rem 0 0;
        font-family: 'Open Sans', sans-serif;
        box-shadow: ${theme.shadows.soft};
        cursor: pointer;
        
        &.selected {
          background-color: ${theme.colors.background_dark};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.background_dark};
          
        }
        
        > .icon {
          width: 1.6rem;
          height: 1.6rem;
        }
        
        .label {
          border-bottom: 2px solid transparent;
        }
        
        &:not(.selected) .label:hover {
          border-bottom: 2px solid ${theme.colors.greySemiDark};
        }
        
      }
      
      .tabPanel {
        height: 100%;
        padding-inline: 2rem;
        padding-block: 1.7rem;
        min-height: 25rem;
        background-color: ${theme.colors.white};
        font-family: 'Open Sans', sans-serif;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: 0 0 1.5rem 1.5rem;
        box-shadow: ${theme.shadows.soft};
        
      }
    }
    
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
        <div className={"admin"}>
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
        </div>
      </div>
    </OrderLayoutStyled>

  )
}