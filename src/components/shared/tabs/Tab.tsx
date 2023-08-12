import styled from "styled-components";
import {theme} from "../../../theme";
import {ReactNode} from "react";

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
  border: 1px solid ${theme.colors.greyLight};
  border-radius: .5rem .5rem 0 0;
  font-family: 'Open Sans', sans-serif;
  box-shadow: ${theme.shadows.soft};
  cursor: pointer;

  &.selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.background_dark};

  }

  > .icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  .label {
    border-bottom: 2px solid transparent;
  }

  &:not(.selected) .label:hover {
    border-bottom: 2px solid ${theme.colors.greySemiDark};
  }
`

type TabProps = {
  Icon?: ReactNode,
  label?: string
  // labelClass?: string,
  // iconClass?:string
}
export const Tab = ({label, Icon}: TabProps) => {
  return (
    <TabStyled>
      { Icon && Icon }
      { label && <span className={"label"}>{label}</span> }
    </TabStyled>
  )
}