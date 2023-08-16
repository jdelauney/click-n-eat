import styled from "styled-components";
import {theme} from "../../../../../theme";


const AdminUpdateProductFormFooterStyled= styled.span`
    color: ${theme.colors.primary_burger};
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;

    > span.underline {
      text-decoration-line: underline;
    }
  
`
export const AdminUpdateProductFormFooter = () => {
  return (
    <AdminUpdateProductFormFooterStyled>
      Cliquez sur un produit du menu pour le modifier&nbsp;
      <span className={"underline"}>en temps réel</span>
    </AdminUpdateProductFormFooterStyled>
  )
}