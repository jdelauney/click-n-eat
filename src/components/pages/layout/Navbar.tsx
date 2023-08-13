import {Logo} from "../../shared/Logo.tsx";
import styled from "styled-components";
import {UserProfil} from "./UserProfil.tsx";
import {theme} from "../../../theme";
import {reloadPage} from "../../../utils/window.ts";
import {ToggleButton} from "../../shared/ToggleButton.tsx";
import {useContext} from "react";
import {ModeAdminContext} from "../order/Context/ModeAdminContext.tsx";
import toast from "react-hot-toast";


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
}
export const Navbar = ({userName}: NavbarPros) => {

  const { isModeAdmin, setIsModeAdmin } = useContext(ModeAdminContext)

  const notifyAdminMode = () => {
    toast('Mode admin activé',
      {
        icon: '🛠️',
        style: {
          borderRadius: '.5rem',
          border: "2px solid " + theme.colors.blue,
          background: theme.colors.background_dark,
          color: theme.colors.blue,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: theme.weights.regular
        },
      }
    );
  }
  const adminButtonToggleHandler = () => {
    setIsModeAdmin(!isModeAdmin)

    if (!isModeAdmin) {
      notifyAdminMode()
    }
  }
  return (
    <NavbarStyled>
      <div>
        <Logo className={"as-link"} onClick={reloadPage}/>
      </div>
      <div className={"right-side"}>
        <ToggleButton isChecked={isModeAdmin} onToggle={adminButtonToggleHandler} labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"} />
        <UserProfil userName={userName}/>
      </div>
    </NavbarStyled>
  )
}