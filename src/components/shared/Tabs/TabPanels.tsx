import styled from "styled-components";
import {HTMLAttributes, PropsWithChildren} from "react";
import {theme} from "../../../theme";

const TabPanelsStyled =  styled.section`
  width: 100%;
  height: 24rem;
  position: relative;
  background-color: ${theme.colors.white};
`

type TabPanelsProps = {
  className?: string
} & PropsWithChildren & HTMLAttributes<HTMLDivElement>
export const TabPanels = ({ className, children, ...rest }: TabPanelsProps) => {
  return (
    <TabPanelsStyled role={"region"} aria-live={"polite"} className={className} {...rest} >
      { children }
    </TabPanelsStyled>
  )
}