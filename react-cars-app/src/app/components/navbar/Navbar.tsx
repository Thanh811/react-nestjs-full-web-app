import React from "react"
import styled from "styled-components"
import Logo from "../logo"
import tw from "twin.macro"
import NavItems from "./navbarItems"
const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `};
`
const LogoContainer = styled.div``;
export default function NavBar() {
  return <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems/>
  </NavbarContainer>
}