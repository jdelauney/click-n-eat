import styled from "styled-components";
import {theme} from "../../../../../theme";
import {formatPrice} from "../../../../../utils/currency.ts";
import {useContext, useEffect, useState} from "react";
import {OrderContext} from "../../Context/OrderContext.tsx";
import {MenuItem} from "../../../../../data/fakeMenu.ts";
import {MachineSlot} from "../../../../shared/MachineSlot.tsx";


const BasketHeaderStyled = styled.header`
  display:flex;
  flex-flow: row nowrap;
  width: 35rem;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.6rem;
  padding-block: 1.2rem;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P4};
  color: ${theme.colors.primary};
  text-transform: uppercase;
  background-color: ${theme.colors.dark};
  
  .price {
    font-weight: ${theme.weights.bold};
    letter-spacing: .2rem;
  }
`
export const BasketHeader = () => {
  const { basket, products } = useContext(OrderContext)
  const [totalPrice, setTotalPrice] = useState<number>(0);


  useEffect(() => {
    const computeTotalCardPrice = (): number => {
      const findProduct = (id: number): MenuItem|undefined => {
        return products.find((product) => id === product.id )
      }

      return basket.reduce((total, currentItem) => {
        const product = findProduct(currentItem.productId)
        const subTotal = product ? (product.price * currentItem.quantity) : 0
        return total + subTotal
      },0)
    }

    setTotalPrice(computeTotalCardPrice())
    return () => {
      setTotalPrice(0)
    }
  }, [basket, products]);


  return (
    <BasketHeaderStyled>
      <span>Total</span>
      {/*<span className={"price"}>{formatPrice(totalPrice)}</span>*/}
      <MachineSlot className={"price"} label={formatPrice(totalPrice)}/>
    </BasketHeaderStyled>
  )
}