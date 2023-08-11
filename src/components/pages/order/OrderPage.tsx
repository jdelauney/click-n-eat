import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {Menu} from "./Menu.tsx";
import { fakeMenu2 as fakeMenu} from "../../../data/fakeMenu.ts";
import {Card} from "./Card.tsx";


const OrderLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 20px 5px;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  
  > .container {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    
  }
`

const OrderPageContentStyled = styled.main`
  width: 100%;
  flex: 1 1 100%;
  background-color: ${theme.colors.background_white};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.strong};
`

export const OrderPage = () => {

  let {userName} = useParams()
  if (!userName) {
    userName=""
  }


  return (
    <OrderLayoutStyled>
      <div className={"container"}>
        <Navbar userName={userName}/>
        <OrderPageContentStyled>
          <Menu>
            {
              fakeMenu.map((item) => {
                return <Card key={item.id} item={item}/>
              })
            }
          </Menu>
        </OrderPageContentStyled>
      </div>
    </OrderLayoutStyled>
  )
}