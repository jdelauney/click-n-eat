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
          id: "tab-collapse",
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
          id: "tab-add-product",
          tabPanelId: "panel-add-product",
          Icon: <AiOutlinePlus/>,
          label: "Ajouter un produit",
        },
        tabpanel: {
          content: <AdminAddProductForm/>,
        }
      },
      {
        tab: {
          id: "tab-update-product",
          tabPanelId: "panel-update-product",
          Icon: <MdModeEditOutline/>,
          label: "Modifier un produit",
        },
        tabpanel: {
          content: <AdminUpdateProductForm/>,
        }
      }
    ]
}