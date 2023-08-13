import styled from "styled-components";
import {PropsWithChildren} from "react";

const TabsStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-inline-start: 7rem;
  overflow: hidden;
`

type TabListProps = {
   ariaLabel?: string,
   selectedTabIndex?: number,
  className?: string
 } & PropsWithChildren
//{selectedTabIndex}: TabsProps
export const Tabs = ({ariaLabel, className,  children}: TabListProps) => {

  return (
    <TabsStyled role={"tablist"} aria-label={ariaLabel} className={className}>
     { children }
    </TabsStyled>
  )
}

//className={selectedTabIndex === 1 ? "selected" : ""}