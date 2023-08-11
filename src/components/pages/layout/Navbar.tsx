import {Link} from 'react-router-dom';
import {Logo} from "../../shared/Logo.tsx";
import {BsPersonCircle} from "react-icons/bs";
import styled from "styled-components";
import {theme} from "../../../theme";


const NavbarStyled = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding-inline:2rem 7rem;
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  
  //.left-side {
  //  
  //}
  //
  //.right-side {
  //  
  //}

`

// const NavbarRightStyled =  styled.div`
//
// `

const UserProfil = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;

  .infosContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    > span {
      font-family: 'Open Sans', sans-serif;
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.greyBlue};

      > span {
        color: ${theme.colors.primary_burger};
      }
    }

    > .link-signout {
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      font-weight: ${theme.weights.regular};
      line-height: 1.4;
      font-style: normal;
      color: ${theme.colors.greyBlue};
      text-decoration: none;
      
    }
  }

  .avatarContainer {
    display: grid;
    place-items: center;

    > .avatar {
      width: 3.6rem;
      height: 3.6rem;
      color: ${theme.colors.greyBlue};
    }
  }
`

type NavbarPros = {
  userName: string;
}
export const Navbar = ({userName}: NavbarPros) => {
  return (
    <NavbarStyled>
      <div>
        <Logo />
      </div>
      <div>
        <UserProfil>
          <div className={"infosContainer"}>
            <span>Hey, <span>{userName}</span></span>
            <Link to={"/"} className={"link-signout"}>Se déconnecter</Link>
          </div>
          <div className={"avatarContainer"}>
            <BsPersonCircle className={"avatar"}/>
          </div>
        </UserProfil>
      </div>
    </NavbarStyled>
  )
}