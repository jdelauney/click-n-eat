import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {MenuItem} from "../../../../data/fakeMenu.ts";
import {AdminForm} from "./AdminForm.tsx";
import {getProductPropertyKeyNameFromInputName} from "./productInputConfig.tsx";
import {BtnSuccess, Button} from "../../../shared/Button.tsx";
import {FiCheckCircle} from "react-icons/fi";

//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg



const NEW_EMPTY_PRODUCT : MenuItem = {
  id: -1,
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
}

const IMAGE_DEFAULT: string = "/assets/images/coming-soon.png"

export const AdminAddProductForm = () => {
  const { products, setProducts } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newProduct, setNewProduct] = useState<MenuItem>(NEW_EMPTY_PRODUCT);

  const addNewProduct = (name: string, imgUrl: string, price: number) => {
    const maxId = Math.max(...products.map(o => o.id))
    const newProduct: MenuItem = {
      id: maxId + 1,
      imageSource: imgUrl === "" ? IMAGE_DEFAULT : imgUrl ,
      title: name,
      price: price,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }
    setProducts([newProduct, ...products ])
  }

  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const currentForm = event.currentTarget as HTMLFormElement

    addNewProduct(newProduct.title, newProduct.imageSource, newProduct.price);

    displaySuccessMessage()

    setNewProduct(NEW_EMPTY_PRODUCT)
    currentForm.reset()
  }

  const handleInputChange = (product: MenuItem, event:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target

    if (product !== null) {
      setNewProduct({
        ...product,
        [getProductPropertyKeyNameFromInputName(name)]: value
      })
    }
  }

  return (

    /*<AdminAddProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageUrl={imageUrl}/>
      <div className={"productForm__fields"}>
        {
          getInputFields().map((input) => {
            return <InputText key={input.name} name={input.name}
                              Icon={input.Icon}
                              inputContainerClass={input.inputContainerClass}
                              placeholder={input.placeholder}
                              ariaLabel={input.ariaLabel}
                              pattern={input.pattern}
                              onInput={input.onInput}
                    />
          })
        }

        <div className={"productForm__footer"}>
          <Button type={"submit"} theme={BtnSuccess} label={"Ajouter un nouveau produit au menu"}/>
          {isSubmitted &&
              <span className={"productForm__notification-message"}><FiCheckCircle className={"icon"}/> Ajouté avec succès !</span>}
        </div>
      </div>
    </AdminAddProductFormStyled>*/

      <AdminForm
        product={newProduct}
        onSubmit={handleSubmit}
        onChange={(event) => { handleInputChange(newProduct, event)}}
        isSubmitted={isSubmitted}
      >
         <Button type={"submit"} theme={BtnSuccess} label={"Ajouter un nouveau produit au menu"}/>
          {isSubmitted &&
              <span className={"productForm__notification-message"}><FiCheckCircle className={"icon"}/> Ajouté avec succès !</span>}
      </AdminForm>

  )
}