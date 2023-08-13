import styled from "styled-components";
import {PropsWithChildren} from "react";

const TabPanelsStyled =  styled.section`
  width: 100%;
  //min-height: 25rem;
`

type TabPanelsProps = {
  className?: string
} & PropsWithChildren
export const TabPanels = ({ className, children }: TabPanelsProps) => {
  return (
    <TabPanelsStyled role={"region"} aria-live={"polite"} className={className}>
      { children }
    </TabPanelsStyled>
  )
}