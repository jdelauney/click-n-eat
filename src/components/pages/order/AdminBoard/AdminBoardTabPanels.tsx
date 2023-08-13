import {TabPanel} from "../../../shared/tabs/TabPanel.tsx";
import {TabPanels} from "../../../shared/tabs/TabPanels.tsx";

type TisSelectedTabHandler = (value: number) => boolean

type AdminBoardTabPanelsProps = {
  isSelectedTabHandler: TisSelectedTabHandler,
}
export const AdminBoardTabPanels = ({isSelectedTabHandler}: AdminBoardTabPanelsProps) => {

  const handleIsSelectedTab = (value: number):boolean => {
    return isSelectedTabHandler(value)
  }

  return (
    <TabPanels>
      <TabPanel id={"panel-1"} labelledBy={"tab-1"} isExpanded={handleIsSelectedTab(1)}>
        Ajout d&apos;un produit
      </TabPanel>
      <TabPanel id={"panel-2"} labelledBy={"tab-2"} isExpanded={handleIsSelectedTab(2)}>
        Modification d&apos;un produit
      </TabPanel>
    </TabPanels>
  )
}