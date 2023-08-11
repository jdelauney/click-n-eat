import {Logo} from "../../shared/Logo.tsx";
import styled from "styled-components";
import {UserProfil} from "./UserProfil.tsx";
import {theme} from "../../../theme";
import {reloadPage} from "../../../utils/window.ts";


const NavbarStyled = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding-inline:2rem 7rem;
  background-color: ${theme.colors.background_white};
  border-radius: 1.5rem 1.5rem 0 0;
  
  //.left-side {
  //  
  //}
  //
  //.right-side {
  //  
  //}
  
  .as-link {
    cursor: pointer;
  }

`

type NavbarPros = {
  userName: string;
}
export const Navbar = ({userName}: NavbarPros) => {
  return (
    <NavbarStyled>
      <div>
        <Logo className={"as-link"} onClick={reloadPage}/>
      </div>
      <div>
        <UserProfil userName={userName}/>
      </div>
    </NavbarStyled>
  )
}