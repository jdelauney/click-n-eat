import styled from "styled-components";
import {theme} from "../../../../theme";

const AdminUpdateProductMessageStyled = styled.div`
    display: flex;
    height:100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P3};
  }
`

export const AdminUpdateProductMessage = () => {
  return (
    <AdminUpdateProductMessageStyled>
        <span>Cliquer sur un produit du menu pour le modifier</span>
    </AdminUpdateProductMessageStyled>
  )
}