import styled from "styled-components";
import {theme} from "../../../theme";
import {MouseEventHandler, ReactNode} from "react";


const TabStyled = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  height: 4.3rem;
  padding-inline: 2.2rem 2.3rem;
  padding-block: 1rem 1.1rem;
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.greyBlue};
  border-width: .1rem .1rem .2rem .1rem;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: .5rem .5rem 0 0;
  font-family: 'Open Sans', sans-serif;
  box-shadow: ${theme.shadows.soft};
  cursor: pointer;

  &.is-selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};

  }

  > .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;

    > * {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .label {
    border-bottom: 2px solid transparent;
  }

  &:not(.is-selected) .label:hover {
    border-bottom: 2px solid ${theme.colors.greySemiDark};
  }
`

type TTabClickHandler = MouseEventHandler<HTMLDivElement>

type TabProps = {
  id: string,
  Icon?: ReactNode,
  label?: string,
  className?: string,
  onClick?: TTabClickHandler,
  tabIndex?: number,
  tabPanelId?: string,
  isSelected?: boolean
  // labelClass?: string,
  // iconClass?:string
}
export const Tab = ({id, Icon, label, className, onClick, tabIndex, tabPanelId, isSelected}: TabProps) => {

  return (
    <TabStyled role={"tab"} id={id}
               className={className}
               onClick={onClick}
               tabIndex={tabIndex}
               aria-controls={tabPanelId}
               aria-selected={isSelected}>
      {Icon && <div className="icon">{Icon}</div>}
      {label && <span className={"label"}>{label}</span>}
    </TabStyled>
  )
}