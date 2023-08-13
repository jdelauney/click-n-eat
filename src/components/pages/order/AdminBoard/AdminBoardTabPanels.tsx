import {TabPanel} from "../../../shared/tabs/TabPanel.tsx";
import {TabPanels} from "../../../shared/tabs/TabPanels.tsx";
import {TAdminBoardTabConfig} from "./adminBoardTabConfig.tsx";

type AdminBoardTabPanelsProps = {
  tabPanelConfig: TAdminBoardTabConfig
}
export const AdminBoardTabPanels = ({tabPanelConfig}: AdminBoardTabPanelsProps) => {

  return (
    <TabPanels>
      {
        tabPanelConfig.map((item) => {
          const {id, tabPanelId } = item.tab
          if (tabPanelId !== undefined && item.tabpanel.isExpanded) {
            return (
              <TabPanel key={tabPanelId}
                        id={tabPanelId}
                        labelledBy={id}
                        isExpanded={item.tabpanel.isExpanded}
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