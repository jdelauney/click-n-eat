import {ButtonPrimary} from "../../../shared/ButtonPrimary.tsx";

export const AdminEmptyProductsInformation = () => {
  return (
    <>
      <span>Le menu est vide ?</span>
      <span>Cliquez ci-dessous pour le réinitialiser</span>
      <ButtonPrimary label={"Générer de nouveaux produits"} style={{fontSize: "1.2rem", paddingInline: "2.4rem"}}/>
    </>
  )
}