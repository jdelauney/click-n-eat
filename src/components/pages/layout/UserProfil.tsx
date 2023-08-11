import {Link} from "react-router-dom";
import {BsPersonCircle} from "react-icons/bs";
import {theme} from "../../../theme";
import styled from "styled-components";

const UserProfilStyled = styled.div`
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

type UserProfilPros = {
  userName: string;
}
export const UserProfil = ({userName}: UserProfilPros) => {
  return (
    <UserProfilStyled>
      <div className={"infosContainer"}>
        <span>Hey, <span>{userName}</span></span>
        <Link to={"/"} className={"link-signout"}>Se déconnecter</Link>
      </div>
      <div className={"avatarContainer"}>
        <BsPersonCircle className={"avatar"}/>
      </div>
    </UserProfilStyled>
  )
}