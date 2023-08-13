import {createContext, Dispatch, SetStateAction} from "react";

export type TAdminContext = {
  selectedTabIndex: number,
  setSelectedTabIndex: Dispatch<SetStateAction<number>>
  isAdminBoardOpen: boolean,
  setIsAdminBoardOpen: Dispatch<SetStateAction<boolean>>
}
export const AdminContext = createContext<TAdminContext>({
  selectedTabIndex: 1,
  setSelectedTabIndex: () => {},
  isAdminBoardOpen: true,
  setIsAdminBoardOpen: () => {},
})