import React from 'react'
import { Nav, NavLink, NavIcon, Bars} from './NavbarELements';


const Navbar = ({toggle}) => {
 return (
  <>
  <Nav>
   <NavLink to="/">Pizza</NavLink>
   <NavIcon onClick={toggle}>
    <p>Menu</p>
    <Bars></Bars>
   </NavIcon>
  </Nav>
  </>
 )
}

export default Navbar;
