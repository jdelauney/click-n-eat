import {Button} from "../../../../../shared/Button/Button.tsx";
import {fakeMenu2 as fakeMenu} from "../../../../../../data/fakeMenu.ts";
import {useContext} from "react";
import {OrderContext} from "../../../Context/OrderContext.tsx";

export const ProductsEmptyMessageAdmin = () => {

  const {setProducts} = useContext(OrderContext)
  const resetProducts = () => {
    setProducts([...fakeMenu])
  }

  const handleButtonClick = () => {
    resetProducts()
  }

  return (
    <>
      <span>Le menu est vide ?</span>
      <span>Cliquez ci-dessous pour le réinitialiser</span>
      <Button label={"Générer de nouveaux produits"} style={{fontSize: "1.2rem", paddingInline: "2.4rem"}} onClick={handleButtonClick}/>
    </>
  )
}