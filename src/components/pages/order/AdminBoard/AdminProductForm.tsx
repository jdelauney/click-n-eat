import styled from "styled-components";
import {InputText} from "../../../shared/InputText.tsx";
import {theme} from "../../../../theme";
import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";
import {BtnSuccess, Button} from "../../../shared/Button.tsx";

const AdminProductFormStyled = styled.form`
  display:flex;
  gap: 2rem;
  width:90rem;
  height:16rem;
  
  .productForm__image-preview {
    display: grid;
    place-items: center;
    width: 22rem;
    height: 12rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.greyLight};
    
    > span {
      font-family: "Open Sans", sans-serif;
      line-height: 2.4;
      color: ${theme.colors.greyBlue};
    }
  }
  
  .productForm__fields {
    display:flex;
    flex-direction: column;
    flex: 1 1 100%;
  }
  
  .productForm__field {
    background-color: ${theme.colors.background_white};
    padding-inline: 1.6rem;
    padding-block: .8rem;
    
    > input {
      background-color: ${theme.colors.background_white};
    }
  }
  
`
export const AdminProductForm = () => {
  return (
    <AdminProductFormStyled>
      <div className={"productForm__image-preview"}>
          <span>Aucune image</span>
      </div>
      <div className={"productForm__fields"}>
        <InputText name={"productName"} Icon={<FaHamburger className={"icon"}/>} inputContainerClass={"productForm__field"} placeholder={"Nom du produit (ex: Super Burger)"} ariaLabel={"Nom du produit "}/>
        <InputText type={"url"} Icon={<BsFillCameraFill className={"icon"}/>} name={"productImage"} inputContainerClass={"productForm__field"} placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"} ariaLabel={"Image du produit "}/>
        <InputText name={"productPrice"} Icon={<MdOutlineEuro className={"icon"}/>} inputContainerClass={"productForm__field"} placeholder={"Prix"} ariaLabel={"Prix du produit "} pattern={"\\d+(\\[.,]\\d{2})?"}/>
        <div>

            <Button theme={BtnSuccess} label={"Ajouter un nouveau produit au menu"}/>

        </div>
      </div>
    </AdminProductFormStyled>
  )
}