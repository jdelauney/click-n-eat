import styled from "styled-components";
import {theme} from "../../../theme";
import {PropsWithChildren} from "react";

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
  display: none;
  
  &[aria-expanded="true"] {
    display: block;
  }
`

type TabPanelProps = {
  id: string,
  labelledBy: string,
  isExpanded:boolean,
  className?: string
} &  PropsWithChildren

export const TabPanel = ({ labelledBy, isExpanded, className, children }: TabPanelProps) => {
  return (
    <TabPanelStyled role={"tabpanel"} tabIndex={0} aria-labelledby={labelledBy} aria-hidden={!isExpanded} aria-expanded={isExpanded} className={className}>
      { children }
    </TabPanelStyled>
  )
}