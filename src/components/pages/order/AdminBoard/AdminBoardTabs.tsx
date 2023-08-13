import {Tabs} from "../../../shared/tabs/Tabs.tsx";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {Tab} from "../../../shared/tabs/Tab.tsx";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";

type TisSelectedTabHandler = (value: number) => boolean
type TTabClickHandler = (value: number) => void

type AdminBoardTabsProps = {
  isAdminBoardOpen: boolean,
  toggleAdminBoardOpenHandler: () => void,
  isSelectedTabHandler: TisSelectedTabHandler,
  tabClickHandler: TTabClickHandler,
}

export const AdminBoardTabs = ({isAdminBoardOpen, toggleAdminBoardOpenHandler, isSelectedTabHandler, tabClickHandler}: AdminBoardTabsProps) => {
  const handleTabClick = (value: number) => (): void => {
    tabClickHandler(value)
  }
  const handleIsSelectedTab= (value: number): boolean  => {
    return isSelectedTabHandler(value)
  }

  return (
    <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
      <Tab id={"tab-0"}
           Icon={ isAdminBoardOpen ? <FiChevronDown/> : <FiChevronUp/>}
           className={!isAdminBoardOpen ? "is-selected" : ""}
           onClick={toggleAdminBoardOpenHandler}
      />

      <Tab id={"tab-1"}
           Icon={<AiOutlinePlus/>}
           label={"Ajouter un produit"}
           onClick={handleTabClick(1)}
           className={handleIsSelectedTab(1) ? "is-selected" : ""}
           isSelected={handleIsSelectedTab(1)}/>
      <Tab id={"tab-2"}
           Icon={<MdModeEditOutline/>}
           label={"Modifier un produit"}
           onClick={handleTabClick(2)}
           className={handleIsSelectedTab(2) ? "is-selected" : ""}
           isSelected={handleIsSelectedTab(2)}/>
    </Tabs>
  )
}