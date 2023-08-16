import styled from "styled-components";
import {theme} from "../../../../../theme";
import {TbTrashX} from "react-icons/tb";

import {MenuItem} from "../../../../../data/fakeMenu.ts";
import {formatPrice} from "../../../../../utils/currency.ts";

const BasketProductCardStyled =  styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-inline: 1.6rem;
  padding-block: .8rem;
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: .5rem;
  box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.20);
  
  .basketProductCard__image-preview {
    width: 8.6rem;
    height: 7rem;
    display: grid;
    place-items: center;
    
    > img {
      /*width: 100%;
      height: 100%;*/
      width: 8.6rem;
      height: 7rem;
      object-fit: contain;
    }
  }

  .basketProductCard__infos {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    gap: 2rem;
    width: 100%;
  
    .basketProductCard__left-info {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      .basketProductCard__title {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P3};
        font-weight: ${theme.weights.bold};
        text-transform: uppercase;
        color: ${theme.colors.dark};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 10.5rem;
      }
    }

    .basketProductCard__text-info {
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.P0};
      text-transform: uppercase;
      color: ${theme.colors.primary};
    }

    .basketProductCard__quantity {
      display: grid;
      place-items: center;
    }
    
  }
  
  .basketProductCard__btn-delete {
    display:none;
    //display: grid;
    place-items: center;
    position: absolute;
    right: 0;
    top:0;
    bottom:0;
    width: 7.6rem;
    appearance: none;
    border:none;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    border-radius: 0 .5rem .5rem 0;
    cursor: pointer;
    
    .icon {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  
  &:hover .basketProductCard__btn-delete {
    display:grid;
  }
  
`

type BasketProductCardProps = {
  product: MenuItem
  quantity: number
  onDelete : () => void
}
export const BasketProductCard = ({product, quantity, onDelete}:BasketProductCardProps) => {
  const {title, imageSource, price } = product
  return (
    <BasketProductCardStyled>
      <div className={"basketProductCard__image-preview"}>
        <img src={imageSource} alt={title}/>
      </div>
      <div className={"basketProductCard__infos"}>
        <div className={"basketProductCard__left-info"}>
          <span className={"basketProductCard__title"}>
            {title}
          </span>
          <span className={"basketProductCard__text-info"}>
            {formatPrice(price)}
          </span>
        </div>
        <div className={"basketProductCard__quantity basketProductCard__text-info"}>
          <span>x {quantity}</span>
        </div>
      </div>

      <button className={"basketProductCard__btn-delete"} onClick={onDelete}>
        <TbTrashX className={"icon"}/>
      </button>
    </BasketProductCardStyled>
  )
}