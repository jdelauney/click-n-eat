import styled from "styled-components";
import {theme} from "../../../theme";
import {HTMLAttributes, PropsWithChildren} from "react";

const TabPanelStyled = styled.div`
  position: absolute;
  inset: 0;
  padding-inline: 2rem;
  padding-block: 1.7rem;
  background-color: ${theme.colors.white};
  font-family: 'Open Sans', sans-serif;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: ${theme.shadows.soft};
  opacity: 0;
  transition: .35s ease-in-out;
  
  &[aria-expanded="true"] {
    opacity: 1;
  }
`

type TabPanelProps = {
  id: string,
  labelledBy: string,
  isExpanded:boolean,
  className?: string
} &  PropsWithChildren & HTMLAttributes<HTMLDivElement>

export const TabPanel = ({ labelledBy, isExpanded, className, children, ...rest }: TabPanelProps) => {
  return (
    <TabPanelStyled role={"tabpanel"} tabIndex={0} aria-labelledby={labelledBy} aria-hidden={!isExpanded} aria-expanded={isExpanded} className={className} {...rest}>
      { children }
    </TabPanelStyled>
  )
}