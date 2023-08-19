import styled from "styled-components";
import {theme} from "../../../../../../theme";
import {TbTrashX} from "react-icons/tb";
import {MenuItem} from "../../../../../../data/fakeMenu.ts";
import {formatPrice} from "../../../../../../utils/currency.ts";
import {MouseEvent, useContext} from "react";
import {AdminContext} from "../../../Context/AdminContext.tsx";
import {OrderContext} from "../../../Context/OrderContext.tsx";

const BasketCardStyled =  styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-inline: 1.6rem;
  padding-block: .8rem;
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: .5rem;
  box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.20);
  transition: all .25s ease-in-out;

  &.is-selectable {
    //border-radius: 1.5rem;
    //background-color: transparent;
    cursor: pointer;
  }

  &.is-selected,
  &.is-selectable:hover {
    box-shadow: -4px 4px 15px 0 rgba(0, 0, 0, 0.20),
    0 0 8px 0 #FF9A23 !important;
  }

  &.is-selectable:hover {
    transform: scale(1.05);
  }
  
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
        max-width: 12rem;
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
    //display:none;
    display: grid;
    z-index:-1;
    opacity:0;
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
    transition: all .25s ease-in-out;
    
    .icon {
      width: 2.4rem;
      height: 2.4rem;
    }

    &:hover {
      background-color: ${theme.colors.redSecondary};
    }
  }
  
  &:hover .basketProductCard__btn-delete {
    z-index:0;
    opacity:1;
  }
  
`

type BasketCardProps = {
  product: MenuItem
  quantity: number
  onDelete : () => void
  className?: string
}
export const BasketCard = ({className, product, quantity, onDelete}:BasketCardProps) => {
  const {title, imageSource, price } = product
  const {isModeAdmin} = useContext(OrderContext)
  const {isAdminBoardOpen, setIsAdminBoardOpen, inputNameRef, setCurrentAdminTabIndex, currentSelectProduct, setCurrentSelectedProduct} = useContext(AdminContext)

  const handleCardClick = async (event: MouseEvent<HTMLDivElement>, product: MenuItem) => {
    if (!isAdminBoardOpen) {
      setIsAdminBoardOpen(true)
    }

    // eslint-disable-next-line @typescript-eslint/await-thenable
    await setCurrentSelectedProduct(product)
    setCurrentAdminTabIndex("tab-update-product");


    if (inputNameRef) {
      inputNameRef.current?.focus()
    }

    event.stopPropagation();
  }

  return (
    <BasketCardStyled
      className={ isModeAdmin ? `is-selectable ${currentSelectProduct?.id === product.id ? `${className} is-selected` : `${className}`}` : `${className}`}
      onClick={isModeAdmin ?  (event) => handleCardClick(event, product) : undefined}
    >

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
    </BasketCardStyled>
  )
}