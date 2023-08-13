import styled from "styled-components";
import {useContext} from "react";
import {AdminContext} from "../Context/AdminContext.tsx";
import {AdminBoardTabs} from "./AdminBoardTabs.tsx";
import {AdminBoardTabPanels} from "./AdminBoardTabPanels.tsx";
import {getAdminBoardTabConfig} from "./adminBoardTabConfig.tsx";


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
          currentAdminTabIndex,
          setCurrentAdminTabIndex} = useContext(AdminContext)

  const defaultHandleTabClick = (value:string) => {
    setCurrentAdminTabIndex(value);
    if (!isAdminBoardOpen) {
      setIsAdminBoardOpen(!isAdminBoardOpen);
    }
  }

  const handleToggleClick = () => {
    setIsAdminBoardOpen(!isAdminBoardOpen);
  }

  const adminTabsConfig = getAdminBoardTabConfig(isAdminBoardOpen, currentAdminTabIndex, handleToggleClick, )
  const adminBoardTabs = adminTabsConfig.map((item) => item.tab)

  return (
    <AdminBoardStyled className={isAdminBoardOpen ? "is-open" : ""}>
      <AdminBoardTabs tabConfig={adminBoardTabs} defaultTabClickHandler={defaultHandleTabClick}/>
      <AdminBoardTabPanels tabPanelConfig={adminTabsConfig}/>
    </AdminBoardStyled>
  )
}