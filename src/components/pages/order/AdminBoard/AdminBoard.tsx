import styled from "styled-components";
import {useContext} from "react";
import {AdminContext} from "../Context/AdminContext.tsx";
import {AdminBoardTabs} from "./AdminBoardTabs.tsx";
import {AdminBoardTabPanels} from "./AdminBoardTabPanels.tsx";
import {getAdminBoardTabConfig} from "./adminBoardTabConfig.tsx";
import {OrderContext} from "../Context/OrderContext.tsx";


const AdminBoardStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  bottom:0;
  border-radius: 0 0 1.5rem 1.5rem;
  transform: translateY(calc(100% - 4.3rem));
  
  &.is-open {
    transform: translateY(0);
  }
`
export const AdminBoard = () => {
  const { isAdminBoardOpen,
          setIsAdminBoardOpen,
          setCurrentAdminTabIndex} = useContext(AdminContext)

  const {setIsAdminUpdateMode} = useContext(OrderContext)
  const defaultHandleTabClick = (value:string) => {
    setCurrentAdminTabIndex(value);
    console.log("defaultHandleTabClick  : ", isAdminBoardOpen)
    if (!isAdminBoardOpen) {
      setIsAdminBoardOpen(true);
    }

    if (value === "tab-2") {
      setIsAdminUpdateMode(true)
    } else {
      setIsAdminUpdateMode(false)
    }
  }

  const handleToggleClick = () => {
    console.log("handleToggleClick  : ", isAdminBoardOpen)
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