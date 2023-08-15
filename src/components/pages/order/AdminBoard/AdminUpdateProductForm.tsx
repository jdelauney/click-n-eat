import styled from "styled-components";
import {InputText} from "../../../shared/InputText.tsx";
import {theme} from "../../../../theme";
import {ChangeEvent, InputHTMLAttributes, ReactElement, useContext } from "react";
//import {OrderContext} from "../Context/OrderContext.tsx";

import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";

import {ImagePreview} from "./ImagePreview.tsx";
import {AdminContext} from "../Context/AdminContext.tsx";
import {AdminUpdateProductMessage} from "./AdminUpdateProductMessage.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg
const AdminUpdateProductFormStyled = styled.form`
  display: flex;
  gap: 2rem;
  width: 90rem;
  height: 16rem;
  
  .productForm__fields {
    display: flex;
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

  .productForm__footer {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1.5rem;
    
    .message {
      color: ${theme.colors.primary_burger};
      font-family: "Open Sans", sans-serif;
      font-size: 1.5rem;

      .underline {
        text-decoration-line: underline;
      }
    }
  }
`

export const AdminUpdateProductForm = () => {
  //const {products, setProducts} = useContext(OrderContext)
  //const [imageUrl, setImageUrl] = useState("");
  const {currentSelectProduct, setCurrentSelectedProduct} = useContext(AdminContext)

/*  const updateProduct = (name: string, imgUrl: string, price: string) => {
    const updatedProduct: MenuItem | null = {
      id: currentSelectProduct!.id,
      imageSource: imgUrl,
      title: name,
      price: parseFloat(price),
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
    setCurrentSelectedProduct(updatedProduct)
    setProducts([...products, updatedProduct])
  }*/

  const getProductPropertyKeyName = (inputName: string): string => {
    switch (inputName) {
      case "productName" :
        return "title"
      case "productImage" :
        return "imageSource"
      case "productPrice" :
        return "price"
      default:
        return "title"
    }
  }

  const getCurrentSelectProductPropertyValue = (inputName: string): string => {
    if (currentSelectProduct !== null) {
      switch (inputName) {
        case "productName" :
          return currentSelectProduct.title ? currentSelectProduct.title : ""
        case "productImage" :
          return currentSelectProduct.imageSource ? currentSelectProduct.imageSource : ""
        case "productPrice" :
          return currentSelectProduct.price ? currentSelectProduct.price.toString() : "0.00"
        default:
          return "title"
      }
    }
    return ""
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCurrentSelectedProduct({id: 0, imageSource: "", isAdvertised: false, isAvailable: false, price: 0, quantity: 0, title: "", ...currentSelectProduct, [getProductPropertyKeyName(name)]: value })
  }

  type FormFieldDesc = {
    type?: string
    name: string
    placeholder: string
    ariaLabel: string
    Icon: ReactElement | null
    inputContainerClass: string
  } & InputHTMLAttributes<HTMLInputElement>

  const getInputFields = (): FormFieldDesc[] => {
    return [
      {
        name: "productName",
        placeholder: "Nom du produit (ex: Super Burger)",
        ariaLabel: "Nom du produit ",
        Icon: <FaHamburger className={"icon"}/>,
        inputContainerClass: "productForm__field",
        onInput: handleInputChange,
      },
      {
        name: "productImage",
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        ariaLabel: "Image du produit",
        Icon: <BsFillCameraFill className={"icon"}/>,
        onInput: handleInputChange,
        inputContainerClass: "productForm__field",
      },
      {
        name: "productPrice",
        placeholder: "Prix",
        ariaLabel: "Prix du produit",
        Icon: <MdOutlineEuro className={"icon"}/>,
        pattern: "[0-9]+([\\.,][0-9]+)?",
        onInput: handleInputChange,
        inputContainerClass: "productForm__field",
      },
    ]
  }

  return (
    <>
    { currentSelectProduct
      ? (
        <AdminUpdateProductFormStyled>
          <ImagePreview imageUrl={currentSelectProduct ? currentSelectProduct.imageSource ?  currentSelectProduct.imageSource : "" : ""}/>
          <div className={"productForm__fields"}>
            {
              getInputFields().map((input) => {
                return <InputText key={input.name} name={input.name}
                                  Icon={input.Icon}
                                  value={currentSelectProduct ? getCurrentSelectProductPropertyValue(input.name) : ""}
                                  inputContainerClass={input.inputContainerClass}
                                  placeholder={input.placeholder}
                                  ariaLabel={input.ariaLabel}
                                  pattern={input.pattern}
                                  onInput={input.onInput}
                />
              })
            }

            <div className={"productForm__footer"}>
              <span className={"message"}>Cliquez sur un produit du menu pour le modifier <span className={"underline"}>en temps réel</span></span>
            </div>
          </div>
        </AdminUpdateProductFormStyled>
      )
      : (
        <AdminUpdateProductMessage/>
      )
    }
    </>
  )

}