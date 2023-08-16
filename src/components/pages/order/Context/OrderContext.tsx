import {createContext, Dispatch, SetStateAction} from "react";
import {MenuList} from "../../../../data/fakeMenu.ts";
import {BasketList} from "../../../../data/fakeBasket.ts";

export type TOrderContext = {
  isModeAdmin: boolean,
  setIsModeAdmin: Dispatch<SetStateAction<boolean>>
  products: MenuList
  setProducts:  Dispatch<SetStateAction<MenuList>>
  basket: BasketList
  setBasket: Dispatch<SetStateAction<BasketList>>
}
export const OrderContext = createContext<TOrderContext>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  products: [],
  setProducts:  () => {},
  basket: [],
  setBasket:  () => {},
})