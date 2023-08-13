import styled from "styled-components";
import {theme} from "../../../../theme";
import {Button} from "../../../shared/Button.tsx";
import {MenuItem} from "../../../../data/fakeMenu.ts";
import {formatPrice} from "../../../../utils/currency.ts";
import {useContext} from "react";
import {OrderContext} from "../Context/OrderContext.tsx";
import {DeleteButton} from "../../../shared/DeleteButton.tsx";

const CardStyled = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 33rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    gap: 1.5rem;
    justify-content: flex-end;
    background-color: ${theme.colors.white};
    border-radius: 1.5rem;
    box-shadow: -8px 8px 20px 0 rgb(0 0 0 / 20%);
    
    .card__remove-button {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
  
    .card__image {
      width: auto;
      max-width: 20rem;
      max-height: 14.5rem;
      object-fit: contain;
    }
    
    .card__title {
      //margin:0;
      max-width: 100%;
      font-family: 'Amatic SC', cursive;
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.bold};
      line-height: 1;
      text-transform: uppercase;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${theme.colors.dark};
    }
    
    .card__footer {
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .card__price {
      font-family: 'Open Sans', sans-serif;
      line-height: 2.2rem;
      color: ${theme.colors.primary_burger};
    }
    
    .card__button {
      padding: 1.2rem 2.65rem;
      max-height: 3.8rem;
      width: 9.5rem;
    }
`

type CardProps = {
  item: MenuItem
}
export const CardMenuItem = ({item}: CardProps) => {
  const {isModeAdmin, products, setProducts} = useContext(OrderContext)

  const handleDeleteButtonClick = (productId: number) => {
    const newProducts = products.filter((product) => {
      return product.id !== productId
    })
    setProducts(newProducts)
  }

  return (
    <CardStyled>
      { isModeAdmin && <DeleteButton className={"card__remove-button"} onClick={() => handleDeleteButtonClick(item.id)}/> }
      <img className={"card__image"} src={item.imageSource} alt={item.title}/>
      <span className={"card__title"}>{item.title}</span>
      <div className={"card__footer"}>
        <span className={"card__price"}>{formatPrice(item.price)}</span>
        <Button label={"Ajouter"} className={"card__button"}/>
      </div>
    </CardStyled>
  )
}