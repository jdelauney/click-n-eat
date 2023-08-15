import {ChangeEvent, useContext} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";

import {AdminContext} from "../Context/AdminContext.tsx";
import {AdminUpdateNotSelectedProductMessage} from "./AdminUpdateNotSelectedProductMessage.tsx";
import {getProductPropertyKeyNameFromInputName} from "./productInputConfig.tsx";
import {AdminForm} from "./AdminForm.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg

export const AdminUpdateProductForm = () => {
  const {setProducts} = useContext(OrderContext)
  const {inputNameRef, currentSelectProduct, setCurrentSelectedProduct} = useContext(AdminContext)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (currentSelectProduct !== null) {
      setCurrentSelectedProduct({...currentSelectProduct,
        [getProductPropertyKeyNameFromInputName(name)]: value})

      setProducts((prevState) => {
        return prevState.map((item) => {
          if (item.id === currentSelectProduct.id) {
            item = {...currentSelectProduct}
          }
          return item
        })
      })
    }
  }

  return (
    <>
    { currentSelectProduct
      ? (
        <AdminForm product={currentSelectProduct} onChange={handleInputChange} ref={inputNameRef}>
          <span className={"message"}>Cliquez sur un produit du menu pour le modifier <span className={"underline"}>en temps réel</span></span>
        </AdminForm>
      )
      : (
        <AdminUpdateNotSelectedProductMessage/>
      )
    }
    </>
  )
}