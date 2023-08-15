import styled from "styled-components";
import {theme} from "../../../../theme";

const AdminUpdateProductFormStyled = styled.div`
  display: block;
  height:100%;
  min-height: 100%;
  
  .message-intro {
    display: flex;
    height:100%;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P3};
  }
`

export const AdminUpdateProductForm = () => {
  return (
    <AdminUpdateProductFormStyled>
      <div className={"message-intro"}><span>Cliquer sur un produit du menu pour le modifier</span></div>
    </AdminUpdateProductFormStyled>
  )
}