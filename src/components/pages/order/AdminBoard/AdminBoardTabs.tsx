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

  const adminTabsConfig =[
    {
      tab: {
        id: "tab-0",
        Icon: isAdminBoardOpen ? <FiChevronDown/> : <FiChevronUp/>,
        label: undefined,
        className: !isAdminBoardOpen ? "is-selected" : "",
        onClick: toggleAdminBoardOpenHandler,
        isSelected: undefined
      },
      tabpanel : {

      }
    },
    {
      tab: {
        id: "tab-1",
        Icon: <AiOutlinePlus/>,
        label: "Ajouter un produit",
        className: handleIsSelectedTab(1) ? "is-selected" : "",
        onClick: handleTabClick(1),
        isSelected: handleIsSelectedTab(1)
      },
      tabpanel : {

      }
    },
    {
      tab: {
        id: "tab-2",
        Icon: <MdModeEditOutline/>,
        label: "Modifier un produit",
        className: handleIsSelectedTab(2) ? "is-selected" : "",
        onClick: handleTabClick(2),
        isSelected: handleIsSelectedTab(2)
      },
      tabpanel : {

      }
    }
  ]

  return (
    <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
      {
        adminTabsConfig.map((item) => {
          const currentTab = item.tab
          return ( <Tab key={currentTab.id}
                        id={currentTab.id}
                        Icon={currentTab.Icon}
                        label={currentTab.label}
                        className={currentTab.className}
                        onClick={currentTab.onClick}
                        isSelected={currentTab.isSelected}
            />
          )
        })
      }
      {/*<Tab id={"tab-0"}
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
           isSelected={handleIsSelectedTab(2)}/>*/}
    </Tabs>
  )
}