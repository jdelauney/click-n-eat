import styled from "styled-components";
import {theme} from "../../../theme";

const TabPanelStyled = styled.div`
  height: 100%;
  padding-inline: 2rem;
  padding-block: 1.7rem;
  min-height: 25rem;
  background-color: ${theme.colors.white};
  font-family: 'Open Sans', sans-serif;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.soft};
`
export const TabPanel = () => {
  return (
    <TabPanelStyled>
      Content TabPanel
    </TabPanelStyled>
  )
}