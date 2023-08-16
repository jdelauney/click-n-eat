import {InputHTMLAttributes, ReactElement} from "react";
import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";
import {MenuItem} from "../../../../../../data/fakeMenu.ts";

export type FormFieldDesc = {
  type?: string
  name: string
  value: unknown
  placeholder: string
  ariaLabel: string
  Icon: ReactElement | null
} & InputHTMLAttributes<HTMLInputElement>

export const getInputs = (product: MenuItem): FormFieldDesc[] => {
  return [
    {
      name: "productName",
      placeholder: "Nom du produit (ex: Super Burger)",
      value: product.title,
      ariaLabel: "Nom du produit ",
      Icon: <FaHamburger className={"icon"}/>,
    },
    {
      name: "productImage",
      placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      value: product.imageSource,
      ariaLabel: "Image du produit",
      Icon: <BsFillCameraFill className={"icon"}/>,
    },
    {
      name: "productPrice",
      placeholder: "Prix",
      value: product.price,
      ariaLabel: "Prix du produit",
      Icon: <MdOutlineEuro className={"icon"}/>,
      pattern: "[0-9]+([\\.,][0-9]+)?",
    },
  ]
}

export const getProductPropertyKeyNameFromInputName = (inputName: string) => {
  switch (inputName) {
    case "productName":
      return "title"
    case "productImage":
      return "imageSource"
    case "productPrice":
      return "price"
    default:
      return ""

  }
}

export const getProductPropertyValueFromInputName = (product: MenuItem, inputName: string): string => {
  if (product !== null) {
    switch (inputName) {
      case "productName" :
        return product.title ? product.title : ""
      case "productImage" :
        return product.imageSource ? product.imageSource : ""
      case "productPrice" :
        return product.price ? product.price.toString() : "0.00"
      default:
        return "title"
    }
  }
  return ""
}