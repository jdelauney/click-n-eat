import {createContext, Dispatch, SetStateAction} from "react";
import {MenuList} from "../../../../data/fakeMenu.ts";

export type TOrderContext = {
  isModeAdmin: boolean,
  setIsModeAdmin: Dispatch<SetStateAction<boolean>>
  products: MenuList
  setProducts:  Dispatch<SetStateAction<MenuList>>
}
export const OrderContext = createContext<TOrderContext>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  products: [],
  setProducts:  () => {},

})