import styled from "styled-components";
import {InputText} from "../../../shared/InputText.tsx";
import {theme} from "../../../../theme";
import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";
import {BtnSuccess, Button} from "../../../shared/Button.tsx";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {MenuItem} from "../../../../data/fakeMenu.ts";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg
const AdminProductFormStyled = styled.form`
  display: flex;
  gap: 2rem;
  width: 90rem;
  height: 16rem;

  .productForm__image-preview {
    display: grid;
    place-items: center;
    width: 22rem;
    height: 15rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.greyLight};
    
    > div {
      height: 100%;
      max-height: 14rem;
    }
    
    > div > img {
      display: block;
      width: auto;
      height: 100%;
      object-fit: contain;
    }

    > div > span {
      font-family: "Open Sans", sans-serif;
      line-height: 2.4;
      color: ${theme.colors.greyBlue};
    }
  }

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

`

const IMAGE_DEFAULT: string = "../../assets/images/coming-soon.png"
export const AdminProductForm = () => {
  const { products, setProducts } = useContext(OrderContext)
  const [imageUrl, setImageUrl] = useState("");



  /*const generatRFC4122uuid = (): string => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }*/
  const addNewProduct = (name: string, imgUrl: string, price: string) => {
    const maxId = Math.max(...products.map(o => o.id))
    const newProduct: MenuItem = {
      id: maxId + 1,
      imageSource: imgUrl,
      title: name,
      price: parseFloat(price),
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
    setProducts([...products, newProduct])
  }


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const currentForm = event.currentTarget as HTMLFormElement
    const formData = new FormData(currentForm)
    const nameValue = formData.get("productName") as string;
    const imageValue = formData.get("productImage") as string;
    const priceValue = formData.get("productPrice") as string;

    addNewProduct(
      nameValue,
      imageValue === "" ? IMAGE_DEFAULT : imageValue,
      priceValue === "" ? "0.00" : priceValue
    );

    currentForm.reset()
  }

  const handleInputImageProductChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log("Image : ", event.target.value)
    setImageUrl(event.target.value)
  }

  return (
    <AdminProductFormStyled onSubmit={handleSubmit}>
      <div className={"productForm__image-preview"}>
        <div>
          {
            imageUrl !== ""
              ? <img  src={imageUrl} alt={"image preview"}/>
              : <span>Aucune image</span>
          }
        </div>
      </div>
      <div className={"productForm__fields"}>
        <InputText name={"productName"}
                   Icon={<FaHamburger className={"icon"}/>}
                   inputContainerClass={"productForm__field"}
                   placeholder={"Nom du produit (ex: Super Burger)"}
                   ariaLabel={"Nom du produit "}
        />
        <InputText type={"url"}
                   Icon={<BsFillCameraFill className={"icon"}/>}
                   name={"productImage"}
                   inputContainerClass={"productForm__field"}
                   placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
                   ariaLabel={"Image du produit "}
                   onChange={handleInputImageProductChange}
        />
        <InputText name={"productPrice"}
                   Icon={<MdOutlineEuro className={"icon"}/>}
                   inputContainerClass={"productForm__field"}
                   placeholder={"Prix"}
                   ariaLabel={"Prix du produit "}
                   pattern={"\\d+(\\{.,}\\d{2})?"}
        />
        <div>
          <Button type={"submit"} theme={BtnSuccess} label={"Ajouter un nouveau produit au menu"}/>

        </div>
      </div>
    </AdminProductFormStyled>
  )
}