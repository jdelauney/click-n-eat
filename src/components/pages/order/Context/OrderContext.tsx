import {createContext, Dispatch, SetStateAction} from "react";

export type TOrderContext = {
  isModeAdmin: boolean,
  setIsModeAdmin: Dispatch<SetStateAction<boolean>>
}
export const OrderContext = createContext<TOrderContext>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

})