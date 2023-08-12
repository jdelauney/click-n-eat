import styled from "styled-components";
import {Tabs} from "../../shared/tabs/Tabs.tsx";
import {TabPanel} from "../../shared/tabs/TabPanel.tsx";


const AdminBoardStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  bottom:0;
  border-radius: 0 0 1.5rem 1.5rem;
  transform: translateY(calc(100% - 4.3rem));
  
  &.open {
    transform: translateY(0);
  }
`
export const AdminBoard = () => {
  return (
    <AdminBoardStyled>
      <Tabs/>
      <TabPanel/>
    </AdminBoardStyled>
  )
}