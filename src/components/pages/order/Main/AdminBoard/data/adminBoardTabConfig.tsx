import {ReactNode} from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";
import {AdminAddProductForm} from "../product/AdminAddProductForm.tsx";
import {AdminUpdateProductForm} from "../product/AdminUpdateProductForm.tsx";

export type TAdminBoardTabConfigTabItem = {
  id: string,
  tabPanelId?: string,
  Icon: ReactNode
  label?: string,
  className?: string
  onClick?: () => void
  isSelected?: boolean
}

export type TAdminBoardTabConfigTabPanelItem = {
  content: ReactNode | string
  isExpanded?: boolean
  className?: string
}

export type TAdminBoardTabConfigItem = {
  tab: TAdminBoardTabConfigTabItem
  tabpanel : TAdminBoardTabConfigTabPanelItem
}

export type TAdminBoardTabConfig = TAdminBoardTabConfigItem[]

export const getAdminBoardTabConfig = (isAdminBoardOpen: boolean,
                                       toggleAdminBoardOpenHandler: () => void ): TAdminBoardTabConfig => {

  return [
      {
        tab: {
          id: "tab-0",
          Icon: isAdminBoardOpen ? <FiChevronDown/> : <FiChevronUp/>,
          className: !isAdminBoardOpen ? "is-selected" : "",
          onClick: toggleAdminBoardOpenHandler,
        },
        tabpanel: {
          content: null
        }
      },
      {
        tab: {
          id: "tab-1",
          tabPanelId: "panel-1",
          Icon: <AiOutlinePlus/>,
          label: "Ajouter un produit",
        },
        tabpanel: {
          content: <AdminAddProductForm/>,
        }
      },
      {
        tab: {
          id: "tab-2",
          tabPanelId: "panel-2",
          Icon: <MdModeEditOutline/>,
          label: "Modifier un produit",
        },
        tabpanel: {
          content: <AdminUpdateProductForm/>,
        }
      }
    ]
}