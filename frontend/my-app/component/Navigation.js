import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Navigation = ({ navigations }) => {
  console.log(
    '🚀 -> file: Navigation.js -> line 21 -> Navigation -> navigations',
    navigations
  );
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavStyled>
      <Navbar className='navbar' color='light' light expand='md'>
        <Link href='/'>
          <a className={`mx-2 h4 ${router.pathname === '/' ? 'active' : ''}`}>
            Movie Now
          </a>
        </Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse className='collapse' isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              {navigations?.map((nav) => {
                return (
                  <Link key={nav?.id} href={nav?.slug}>
                    <a
                      className={`h4 mx-2 ${
                        router.pathname === nav?.slug ? 'active' : ''
                      }`}
                    >
                      {nav?.title}
                    </a>
                  </Link>
                );
              })}
            </NavItem>
          </Nav>
          <NavbarText className='mr-1'>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  /* background-color: #fefbd8; */
  .navbar {
    text-decoration: none;
    padding: 5px;

    .active {
      color: red;
    }

    .collapse {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Navigation;
