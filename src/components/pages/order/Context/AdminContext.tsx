import {createContext, Dispatch, SetStateAction} from "react";

export type TAdminContext = {
  currentAdminTabIndex: string,
  setCurrentAdminTabIndex: Dispatch<SetStateAction<string>>
  isAdminBoardOpen: boolean,
  setIsAdminBoardOpen: Dispatch<SetStateAction<boolean>>

}
export const AdminContext = createContext<TAdminContext>({
  currentAdminTabIndex: "",
  setCurrentAdminTabIndex: () => {},
  isAdminBoardOpen: true,
  setIsAdminBoardOpen: () => {},
})