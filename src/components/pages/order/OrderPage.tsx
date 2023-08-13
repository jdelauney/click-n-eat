import { useParams} from 'react-router-dom';
import styled from "styled-components";
import {theme} from "../../../theme";
import {Navbar} from "../layout/Navbar.tsx";
import {useState} from "react";
import {AdminBoard} from "./AdminBoard/AdminBoard.tsx";
import {AdminContext, TAdminContext} from "./Context/AdminContext.tsx";
import {ModeAdminContext, TModeAdminContext} from "./Context/ModeAdminContext.tsx";
import {Main} from "./Main/Main.tsx";

const OrderPageStyled = styled.div`
  
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 20px 5px;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  
  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    max-height: 95vh;
    overflow: hidden;
  }
`

export const OrderPage = () => {

  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [currentAdminTabIndex, setCurrentAdminTabIndex] = useState<string>("tab-1");
  const [isAdminBoardOpen, setIsAdminBoardOpen] = useState<boolean>(true);

  const adminContextValue: TAdminContext = {
    currentAdminTabIndex : currentAdminTabIndex,
    setCurrentAdminTabIndex: setCurrentAdminTabIndex,
    isAdminBoardOpen: isAdminBoardOpen,
    setIsAdminBoardOpen: setIsAdminBoardOpen,
  }

  const modeAdminContextValue: TModeAdminContext = {
    isModeAdmin: isAdminMode,
    setIsModeAdmin: setIsAdminMode
  }

  let {userName} = useParams()
  if (!userName) {
    userName=""
  }

  return (
    <ModeAdminContext.Provider value={modeAdminContextValue}>
      <OrderPageStyled>
        <div className={"container"}>
          <Navbar userName={userName}/>
          <Main/>
            { isAdminMode &&
                <AdminContext.Provider value={adminContextValue}>
                    <AdminBoard/>
                </AdminContext.Provider>
            }
        </div>
      </OrderPageStyled>
    </ModeAdminContext.Provider>
  )
}