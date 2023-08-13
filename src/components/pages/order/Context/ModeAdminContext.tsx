import {createContext, Dispatch, SetStateAction} from "react";

export type TModeAdminContext = {
  isModeAdmin: boolean,
  setIsModeAdmin: Dispatch<SetStateAction<boolean>>
}
export const ModeAdminContext = createContext<TModeAdminContext>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

})