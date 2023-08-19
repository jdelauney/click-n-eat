import {Tabs} from "../../../../shared/Tabs/Tabs.tsx";
import {Tab} from "../../../../shared/Tabs/Tab.tsx";
import {TAdminBoardTabConfigTabItem} from "./data/adminBoardTabConfig.tsx";
import {useContext} from "react";
import {AdminContext} from "../../Context/AdminContext.tsx";
import {OrderContext} from "../../Context/OrderContext.tsx";
import {isEmpty} from "../../../../../utils/array.ts";

// type TisSelectedTabHandler = (value: string) => boolean
type TTabClickHandler = (value: string) => void

type AdminBoardTabsProps = {
  tabConfig : TAdminBoardTabConfigTabItem[],
  defaultTabClickHandler: TTabClickHandler,
}

export const AdminBoardTabs = ({tabConfig, defaultTabClickHandler}: AdminBoardTabsProps) => {

  const {products} = useContext(OrderContext)
  const  {currentAdminTabIndex, setCurrentAdminTabIndex} = useContext(AdminContext)

  if (isEmpty(products)) {
    setCurrentAdminTabIndex("tab-add-product")
  }
  return (
    <Tabs ariaLabel={"Groupe d'actions du panel d'administration"}>
      {
        tabConfig.map((currentTab) => {
          if (!(isEmpty(products) && (currentTab.id === "tab-update-product"))) {
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
          }
        })
      }
    </Tabs>
  )
}