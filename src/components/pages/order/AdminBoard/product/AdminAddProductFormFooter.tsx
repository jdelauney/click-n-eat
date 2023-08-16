import {Button} from "../../../../shared/Button/Button.tsx";
import {FiCheckCircle} from "react-icons/fi";
import styled from "styled-components";
import {theme} from "../../../../../theme";

const NotificationSuccessMessageStyled= styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap:.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  color: ${theme.colors.success};

  > .icon {
    width: 1.8rem;
    height: 1.8rem;
  }
`

type AdminAddProductFormFooterProps = {
  isSubmitted: boolean
}
export const AdminAddProductFormFooter = ({isSubmitted}:AdminAddProductFormFooterProps) => {
  return (
    <>
      <Button type={"submit"} variant={"success"} size={"medium"} label={"Ajouter un nouveau produit au menu"}/>
      { isSubmitted &&
      <NotificationSuccessMessageStyled>
          <FiCheckCircle className={"icon"}/>
          Ajouté avec succès !
      </NotificationSuccessMessageStyled>
      }
    </>
  )
}