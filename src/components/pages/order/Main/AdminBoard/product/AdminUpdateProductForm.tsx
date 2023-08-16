import {ChangeEvent, useContext} from "react";
import {OrderContext} from "../../../Context/OrderContext.tsx";

import {AdminContext} from "../../../Context/AdminContext.tsx";
import {AdminUpdateNotSelectedProductMessage} from "./AdminUpdateNotSelectedProductMessage.tsx";
import {getProductPropertyKeyNameFromInputName} from "../data/productInputConfig.tsx";
import {AdminForm} from "../shared/AdminForm.tsx";
import {AdminUpdateProductFormFooter} from "./AdminUpdateProductFormFooter.tsx";


//https://c-pi.niceshops.com/upload/image/product/large/default/haribo-tropi-frutti-100-g-922290-fr.jpg

export const AdminUpdateProductForm = () => {
  const {setProducts} = useContext(OrderContext)
  const {inputNameRef, currentSelectProduct, setCurrentSelectedProduct} = useContext(AdminContext)

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    console.log(value)
    if (currentSelectProduct !== null) {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      const updateProduct =  {...currentSelectProduct, [getProductPropertyKeyNameFromInputName(name)]: value}

      setCurrentSelectedProduct(updateProduct)

      // eslint-disable-next-line @typescript-eslint/await-thenable
      setProducts((prevState) => {
        return prevState.map((item) => {
          if (item.id === updateProduct.id) {
            item = {...updateProduct}
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
          <AdminUpdateProductFormFooter/>
        </AdminForm>
      )
      : (
        <AdminUpdateNotSelectedProductMessage/>
      )
    }
    </>
  )
}