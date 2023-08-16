import {FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../theme";
import {InputText} from "../../shared/InputText.tsx";
import {Button} from "../../shared/Button/Button.tsx";
import {BsChevronRight, BsPersonCircle} from "react-icons/bs";


const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 3.2rem;
  padding-block: 5rem 4rem;
  color: white;
  
  h2 {
    font-family: 'Amatic SC', serif;
    font-size: ${theme.fonts.P5};
    font-weight: 700;
  }
  
  hr {
    margin-top:3.2rem;
    margin-bottom: 4rem;
    width: 100%;
    background-color: ${theme.colors.primary_burger};
    height: 3px;
    border: none;
  }

  h3 {
    font-family: 'Amatic SC', serif;
    font-size: ${theme.fonts.P4};
    font-weight: 700;
    margin-bottom: 1.8rem;
  }
  
  
`
export const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const currentForm = event.currentTarget as HTMLFormElement
        const formData = new FormData(currentForm)
        const firstNameValue = formData.get("firstName") as string;
        // Sinon sans le FormData et on evite les deux lignes ci-dessus

        //const firstNameValue: string = currentForm.elements.firstName.value as string
        currentForm.reset()
        navigate(`/order/${firstNameValue}`, { replace: true })
    }
    return (
        <LoginFormStyled onSubmit={handleSubmit}>
          <h2>Bienvenue chez nous !</h2>
          <hr/>
          <h3>Connectez-vous</h3>
          <InputText
            name="firstName"
            ariaLabel="Identifiant"
            placeholder="Entrez votre prénom"
            Icon={<BsPersonCircle className={"icon"}/>}
            required/>
          <Button
            type={"submit"}
            label={"Accédez à mon espace"}
            fullWidth={true}
            IconAfter={<BsChevronRight className={"icon"}/>}
          />
        </LoginFormStyled>
    )
}