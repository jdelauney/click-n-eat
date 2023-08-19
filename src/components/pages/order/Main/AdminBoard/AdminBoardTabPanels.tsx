import {TabPanel} from "../../../../shared/Tabs/TabPanel.tsx";
import {TabPanels} from "../../../../shared/Tabs/TabPanels.tsx";
import {TAdminBoardTabConfig} from "./data/adminBoardTabConfig.tsx";
import {useContext} from "react";
import {AdminContext} from "../../Context/AdminContext.tsx";

type AdminBoardTabPanelsProps = {
  tabPanelConfig: TAdminBoardTabConfig
}
export const AdminBoardTabPanels = ({tabPanelConfig}: AdminBoardTabPanelsProps) => {

  const  {currentAdminTabIndex} = useContext(AdminContext)

  return (
    <TabPanels >
      {
        tabPanelConfig.map((item) => {
          const {id, tabPanelId } = item.tab
          if (tabPanelId !== undefined) {
            return (
              <TabPanel key={tabPanelId}
                        id={tabPanelId}
                        labelledBy={id}
                        isExpanded={currentAdminTabIndex === id}
                        className={item.tabpanel.className}
              >
                {item.tabpanel.content}
              </TabPanel>
            )
          }
        })
      }
    </TabPanels>
  )
}