import styled from "styled-components";
import {theme} from "../../../../../theme";
import {Button} from "../../../../shared/Button/Button.tsx";
import {MenuItem} from "../../../../../data/fakeMenu.ts";
import {formatPrice} from "../../../../../utils/currency.ts";
import {useContext} from "react";
import {OrderContext} from "../../Context/OrderContext.tsx";
import {AdminContext} from "../../Context/AdminContext.tsx";
import {MouseEvent} from "react";
import {TiDelete} from "react-icons/ti";
import {fadeInFromRight} from "../../../../../theme/animations.ts";

const ProductCardStyled = styled.article`
  width: 24rem;
  height: 33rem;
  
  .is-selectable {
    border-radius: 1.5rem;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }

  .is-selected,
  .is-selectable:hover {
    box-shadow: -8px 8px 20px 0 rgb(0 0 0 / 20%),
    0 0 8px 0 #FF9A23 !important;
  }

  .is-selectable:hover {
    transform: scale(1.05);
  }
  
  .card__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding-inline: 2rem;
    padding-block: 1rem;
    gap: 1.5rem;
    justify-content: flex-end;
    background-color: ${theme.colors.white};
    border-radius: 1.5rem;
    box-shadow: -8px 8px 20px 0 rgb(0 0 0 / 20%);
    border: 2px solid transparent;
    transition: all .25s ease-in-out;
  }

  .card__remove-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding:0;
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: transparent;
    animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

    > .icon {
      width:100%;
      height: 100%;
      fill: ${theme.colors.red};
      stroke: ${theme.colors.white};
      transition: all .25s ease-in-out;
    }

    &:hover {
      background-color: transparent;
    }
    &:hover > .icon {
      fill: ${theme.colors.redSecondary};
    }
    
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
    display: flex;
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
export const ProductCard = ({item}: CardProps) => {
  const {isModeAdmin, products, setProducts, basket, setBasket} = useContext(OrderContext)
  const {setCurrentAdminTabIndex, inputNameRef, isAdminBoardOpen, setIsAdminBoardOpen, currentSelectProduct, setCurrentSelectedProduct} = useContext(AdminContext)

  const deleteProductToBasket = (productId: number) => {
    const newBasket = basket.filter((basketItem) => {
      return basketItem.productId !== productId
    })
    setBasket(newBasket)
  }

  const deleteProduct = (productId: number) => {
    const newProducts = products.filter((product) => {
      return product.id !== productId
    })
    setProducts(newProducts)

    deleteProductToBasket(productId)
  }


  const addProductToBasket = (productId: number) => {

    const currentBasketItem = basket.find((item) => productId === item.productId )
    const newQuantity = currentBasketItem ? currentBasketItem.quantity + 1 : 1;
    const newId = currentBasketItem ?  currentBasketItem.id : crypto.randomUUID()

    const newBasketItem = {
      id : newId,
      productId: productId,
      quantity: newQuantity
    }
    if (currentBasketItem) {
      setBasket((prevState) => {
        return prevState.map((item) => {
          if (item.id === newBasketItem.id) {
            item = {...newBasketItem}
          }
          return item
        })
      })
    } else {
      setBasket([newBasketItem, ...basket])
    }
  }

const handleDeleteClick = (event: MouseEvent, id: number) => {
    deleteProduct(id)
    if (id === currentSelectProduct?.id) {
      setCurrentSelectedProduct(null)
    }
    if (inputNameRef) {
      inputNameRef.current?.focus()
    }
    event.stopPropagation()
  }

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
    <ProductCardStyled>
      <div
        className={ isModeAdmin ? `card__inner is-selectable ${currentSelectProduct?.id === item.id ? "is-selected" : ""}` : "card__inner"}
        onClick={isModeAdmin ?  (event) => handleCardClick(event, item) : undefined}
      >
        {
          isModeAdmin &&
            <Button
                variant={"danger"}
                shape={"circle"}
                IconAfter={<TiDelete className={"icon"}/>}
                className={"card__remove-button"}
                aria-label={"Delete product"}
                onClick={(event) => handleDeleteClick(event, item.id)}/>
        }
        <img className={"card__image"} src={item.imageSource} alt={item.title}/>
        <span className={"card__title"}>{item.title}</span>
        <div className={"card__footer"}>
          <span className={"card__price"}>{formatPrice(item.price)}</span>
          <Button label={"Ajouter"} className={"card__button"} onClick={() => addProductToBasket(item.id)}/>
        </div>
      </div>
    </ProductCardStyled>
  )
}