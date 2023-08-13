import {Tabs} from "../../../shared/tabs/Tabs.tsx";
import {Tab} from "../../../shared/tabs/Tab.tsx";
import {TAdminBoardTabConfigTabItem} from "./adminBoardTabConfig.tsx";

// type TisSelectedTabHandler = (value: string) => boolean
type TTabClickHandler = (value: string) => void

type AdminBoardTabsProps = {
  tabConfig : TAdminBoardTabConfigTabItem[],
  defaultTabClickHandler: TTabClickHandler,
}

export const AdminBoardTabs = ({tabConfig, defaultTabClickHandler}: AdminBoardTabsProps) => {

  return (
    <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
      {
        tabConfig.map((currentTab) => {
          return ( <Tab key={currentTab.id}
                        id={currentTab.id}
                        tabPanelId={currentTab.tabPanelId}
                        Icon={currentTab.Icon}
                        label={currentTab.label}
                        className={currentTab.className}
                        onClick={currentTab.onClick === undefined ? () => {defaultTabClickHandler(currentTab.id)} : currentTab.onClick}
                        isSelected={currentTab.isSelected}
            />
          )
        })
      }
    </Tabs>
  )
}