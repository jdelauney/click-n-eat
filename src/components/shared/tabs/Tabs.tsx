import styled from "styled-components";
import {FiChevronDown} from "react-icons/fi";
import {Tab} from "./Tab.tsx";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";

const TabsStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-inline-start: 7rem;
  overflow: hidden;
`

export const Tabs = () => {
  return (
    <TabsStyled>
      <Tab Icon={<FiChevronDown className={"icon"}/>}/>
      <Tab Icon={<AiOutlinePlus className={"icon"}/>} label={"Ajouter un produit"}/>
      <Tab Icon={<MdModeEditOutline className={"icon"}/>} label={"Modifier un produit"}/>
    </TabsStyled>
  )
}