import {Tabs} from "../../../shared/tabs/Tabs.tsx";
import {Tab} from "../../../shared/tabs/Tab.tsx";
import {TAdminBoardTabConfigTabItem} from "./adminBoardTabConfig.tsx";
import {useContext} from "react";
import {AdminContext} from "../Context/AdminContext.tsx";

// type TisSelectedTabHandler = (value: string) => boolean
type TTabClickHandler = (value: string) => void

type AdminBoardTabsProps = {
  tabConfig : TAdminBoardTabConfigTabItem[],
  defaultTabClickHandler: TTabClickHandler,
}

export const AdminBoardTabs = ({tabConfig, defaultTabClickHandler}: AdminBoardTabsProps) => {

  const  {currentAdminTabIndex} = useContext(AdminContext)

  return (
    <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
      {
        tabConfig.map((currentTab) => {
          return ( <Tab key={currentTab.id}
                        id={currentTab.id}
                        tabPanelId={currentTab.tabPanelId}
                        Icon={currentTab.Icon}
                        label={currentTab.label}
                        className={ currentTab.className === undefined ? currentAdminTabIndex === currentTab.id ? "is-selected" : "" : currentTab.className}
                        onClick={currentTab.onClick === undefined ? () => {defaultTabClickHandler(currentTab.id)} : currentTab.onClick}
                        isSelected={(currentTab.isSelected === undefined) && (currentTab.tabPanelId !== undefined) ? currentAdminTabIndex === currentTab.id : currentTab.isSelected }
            />
          )
        })
      }
    </Tabs>
  )
}