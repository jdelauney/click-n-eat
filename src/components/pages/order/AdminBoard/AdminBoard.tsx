import styled from "styled-components";
import {useContext} from "react";
import {AdminContext} from "../context/AdminContext.tsx";
import {AdminBoardTabs} from "./AdminBoardTabs.tsx";
import {AdminBoardTabPanels} from "./AdminBoardTabPanels.tsx";


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
          selectedTabIndex,
          setSelectedTabIndex} = useContext(AdminContext)

  const handleTabClick = (value: number) => {
    setSelectedTabIndex(value);
    if (!isAdminBoardOpen) {
      setIsAdminBoardOpen(!isAdminBoardOpen);
    }
  }

  const isSelectedTab = (index: number): boolean => {
    return selectedTabIndex === index;
  }

  const handleToggleClick = () => {
    setIsAdminBoardOpen(!isAdminBoardOpen);
  }

  return (
    <AdminBoardStyled className={isAdminBoardOpen ? "is-open" : ""}>
      <AdminBoardTabs  isAdminBoardOpen={isAdminBoardOpen}
                       toggleAdminBoardOpenHandler={handleToggleClick}
                       isSelectedTabHandler={isSelectedTab}
                       tabClickHandler={handleTabClick}/>
      <AdminBoardTabPanels isSelectedTabHandler={isSelectedTab} />
    </AdminBoardStyled>
  )
}