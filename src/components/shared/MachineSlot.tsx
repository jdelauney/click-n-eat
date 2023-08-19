import styled from "styled-components";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const MachineSlotStyled = styled.div`
  
  position: relative;
  overflow: hidden;
  
  .label-animated-enter {
    transform: translateY(100%);
  }

  .label-animated-enter-active {
    transform: translateY(0);
    transition: all .35s linear;
  }

  //.label-animated-enter-done {
  //  background-color: pink;
  //}

  .label-animated-exit {
    position: absolute;
    right:0;
    bottom:0;
    transform: translateY(0);
  }

  .label-animated-exit-active {
    transform: translateY(-100%);
    transition: all .35s linear;
  }
  
  span {
    display: inline-block;
  }
`

type MachineSlotProps = {
  className?: string
  label: string
}
export const MachineSlot = ({className, label}: MachineSlotProps) => {
  return (
    <TransitionGroup component={MachineSlotStyled}>
      <CSSTransition classNames={"label-animated"} timeout={350} key={label}>
        <span className={className}>{label}</span>
      </CSSTransition>
    </TransitionGroup>
  )
}