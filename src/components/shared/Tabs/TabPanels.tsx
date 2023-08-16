import styled from "styled-components";
import {HTMLAttributes, PropsWithChildren} from "react";

const TabPanelsStyled =  styled.section`
  width: 100%;
  //min-height: 25rem;
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