import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";

const NavHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItems = props.navItems;

  return (
    <Navbar
      color="light"
      light
      expand="lg"
      style={{ display: "flex", width: "100%" }}
    >
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar
        style={{
          justifyContent: "center",
        }}
      >
        <Nav className="mr-auto" navbar>
          {navItems.map((navItem) => (
            <NavItem>
              <NavLink href={"/" + navItem.toLowerCase() + "/"}>
                {navItem}
              </NavLink>
            </NavItem>
          ))}

          {/* <NavItem>
              <NavLink href={"/"+{$navItem}+"/"}>{navItem}
              </NavLink>
            </NavItem> */}
          {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavHeader;
