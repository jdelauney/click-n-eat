import {createContext, Dispatch, RefObject, SetStateAction} from "react";
import {MenuItem} from "../../../../data/fakeMenu.ts";

export type TAdminContext = {
  currentAdminTabIndex: string,
  setCurrentAdminTabIndex: Dispatch<SetStateAction<string>>
  isAdminBoardOpen: boolean,
  setIsAdminBoardOpen: Dispatch<SetStateAction<boolean>>
  currentSelectProduct: MenuItem | null,
  setCurrentSelectedProduct: Dispatch<SetStateAction<MenuItem|null>>
  inputNameRef: RefObject<HTMLInputElement>|null
}
export const AdminContext = createContext<TAdminContext>({
  currentAdminTabIndex: "",
  setCurrentAdminTabIndex: () => {},
  isAdminBoardOpen: true,
  setIsAdminBoardOpen: () => {},
  currentSelectProduct: null,
  setCurrentSelectedProduct: () => {},
  inputNameRef: null
})