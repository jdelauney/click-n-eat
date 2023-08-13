import styled from "styled-components";
import {Tabs} from "../../shared/tabs/Tabs.tsx";
import {TabPanel} from "../../shared/tabs/TabPanel.tsx";
import {useContext} from "react";
import {AdminContext} from "./context/AdminContext.tsx";
import {Tab} from "../../shared/tabs/Tab.tsx";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";
import {TabPanels} from "../../shared/tabs/TabPanels.tsx";


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
  const {isAdminBoardOpen, setIsAdminBoardOpen, selectedTabIndex, setSelectedTabIndex} = useContext(AdminContext)
  const handleTabClick = (value: number) => () => {
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
      <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
        <Tab id={"tab-0"}
             Icon={ isAdminBoardOpen ? <FiChevronDown/> : <FiChevronUp/>}
             className={!isAdminBoardOpen ? "is-selected" : ""}
             onClick={handleToggleClick} />
        <Tab id={"tab-1"}
             Icon={<AiOutlinePlus/>}
             label={"Ajouter un produit"}
             onClick={handleTabClick(1)}
             className={isSelectedTab(1) ? "is-selected" : ""}
             isSelected={isSelectedTab(1)}/>
        <Tab id={"tab-2"}
             Icon={<MdModeEditOutline/>}
             label={"Modifier un produit"}
             onClick={handleTabClick(2)}
             className={isSelectedTab(2) ? "is-selected" : ""}
             isSelected={isSelectedTab(2)}/>
      </Tabs>
      <TabPanels>
        <TabPanel id={"panel-1"} labelledBy={"tab-1"} isExpanded={isSelectedTab(1)}>
          Ajout d&apos;un produit
        </TabPanel>
        <TabPanel id={"panel-2"} labelledBy={"tab-2"} isExpanded={isSelectedTab(2)}>
          Modification d&apos;un produit
        </TabPanel>
      </TabPanels>
    </AdminBoardStyled>
  )
}