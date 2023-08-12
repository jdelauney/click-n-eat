import {Logo} from "../../shared/Logo.tsx";
import styled from "styled-components";
import {UserProfil} from "./UserProfil.tsx";
import {theme} from "../../../theme";
import {reloadPage} from "../../../utils/window.ts";
import {ToggleButton} from "../../shared/ToggleButton.tsx";
import {ChangeEventHandler} from "react";


const NavbarStyled = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 8rem;
  padding-inline:2rem 7rem;
  background-color: ${theme.colors.background_white};
  border-radius: 1.5rem 1.5rem 0 0;
  position: sticky;
  top:0;
  
  
  //.left-side {
  //  
  //}
  //
  .right-side {
    display:flex;
    flex-flow: row nowrap;
    gap:5rem;
    align-items: center;
  }
  
  .as-link {
    cursor: pointer;
  }

`

type NavbarPros = {
  userName: string;
  onAdminButtonToggle: ChangeEventHandler<HTMLInputElement>,
  adminMode: boolean
}
export const Navbar = ({userName, onAdminButtonToggle, adminMode=false}: NavbarPros) => {
  return (
    <NavbarStyled>
      <div>
        <Logo className={"as-link"} onClick={reloadPage}/>
      </div>
      <div className={"right-side"}>
        <ToggleButton isChecked={adminMode} onToggle={onAdminButtonToggle} labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"} />
        <UserProfil userName={userName}/>
      </div>
    </NavbarStyled>
  )
}