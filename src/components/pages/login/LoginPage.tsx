import {LoginForm} from "./LoginForm.tsx";
import styled from "styled-components";
import {Logo} from "../../shared/Logo.tsx";


const LoginPageStyled = styled.div`
  //position: relative;
  display: grid;
  //justify-content: center;
  //align-items: center;
  place-items: center;
  min-height:100dvh;
  width: 100dvw;
  margin:0;
  padding: 0;
  background-image: url("assets/images/burger-background.jpg");
  background-color: rgba(0,0,0,.65);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
  
  //background-color: black;
  
  //background-blend-mode: difference;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`


export const LoginPage = () => {
    return (
        <LoginPageStyled>
          <div>
            <Logo big/>
            <LoginForm/>
          </div>
        </LoginPageStyled>
    )
}