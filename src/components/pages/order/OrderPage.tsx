import {Link, useNavigate, useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Logo} from "../../shared/Logo.tsx";
import {BsPersonCircle} from "react-icons/bs";

const OrderLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 20px 5px;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  
  > .container {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    
  }
`

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

`

const NavbarRightStyled =  styled.div`
 
`

const NavbarUserInfoContainerStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;
`

const UserInfoContainerStyled = styled.div`
  display:flex;
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
    font-size:1.6rem;
    font-weight: ${theme.weights.regular};
    line-height: 1.4;
    font-style: normal;
    color: ${theme.colors.greyBlue};
  }
`

const AvatarContainerStyled = styled.div`
  display:grid;
  place-items: center;
  
  > .avatar {
    width: 3.6rem;
    height: 3.6rem;
    color: ${theme.colors.greyBlue};
  }
`

const OrderPageContentStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: white;
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};  
`

export const OrderPage = () => {

  const {userName} = useParams()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/`, {replace: true})
  }

  return (
    <OrderLayoutStyled>
      <div className={"container"}>
        <NavbarStyled>

            <Logo />

          <NavbarRightStyled>
            <NavbarUserInfoContainerStyled>
              <UserInfoContainerStyled>
                <span>Hey, <span>{userName}</span></span>
                <Link to={"/"} className={"link-signout"}>Se déconnecter</Link>
              </UserInfoContainerStyled>
              <AvatarContainerStyled>
                <BsPersonCircle className={"avatar"}/>
              </AvatarContainerStyled>
            </NavbarUserInfoContainerStyled>
          </NavbarRightStyled>
        </NavbarStyled>
        <OrderPageContentStyled>
          <div>
            <h1>Bonjour {userName}</h1>
            <br/>
            <button onClick={handleClick}>Déconnexion</button>
          </div>
        </OrderPageContentStyled>
      </div>
    </OrderLayoutStyled>
  )
}