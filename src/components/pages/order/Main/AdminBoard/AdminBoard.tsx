import styled from "styled-components";
import {useContext} from "react";
import {AdminContext} from "../../Context/AdminContext.tsx";
import {AdminBoardTabs} from "./AdminBoardTabs.tsx";
import {AdminBoardTabPanels} from "./AdminBoardTabPanels.tsx";
import {getAdminBoardTabConfig} from "./data/adminBoardTabConfig.tsx";
//import {OrderContext} from "../Context/OrderContext.tsx";


const AdminBoardStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  right:0;
  bottom:0;
  
  border-radius: 0 0 1.5rem 1.5rem;
  transform: translateY(calc(100% - 4.3rem));
  //bottom: calc(100% - 4.3rem);
  transition: all .3s ease-in-out;
  
  &.is-open {
    transform: translateY(0);
  }
`
export const AdminBoard = () => {
  const { inputNameRef, isAdminBoardOpen,
          setIsAdminBoardOpen,
          setCurrentAdminTabIndex} = useContext(AdminContext)

  //const {setIsAdminUpdateMode} = useContext(OrderContext)
  const defaultHandleTabClick = (value:string) => {
    setCurrentAdminTabIndex(value);
    if (!isAdminBoardOpen) {
      setIsAdminBoardOpen(true);
    }

    if (value === "tab-2") {
      if (inputNameRef) {
        inputNameRef.current?.focus()
      }
    }
  }

  const handleToggleClick = () => {
    setIsAdminBoardOpen(!isAdminBoardOpen);
  }

  const adminTabsConfig = getAdminBoardTabConfig(isAdminBoardOpen, handleToggleClick)
  const adminBoardTabs = adminTabsConfig.map((item) => item.tab)

  return (
    <AdminBoardStyled className={isAdminBoardOpen ? "is-open" : ""}>
      <AdminBoardTabs tabConfig={adminBoardTabs} defaultTabClickHandler={defaultHandleTabClick}/>
      <AdminBoardTabPanels tabPanelConfig={adminTabsConfig}/>
    </AdminBoardStyled>
  )
}