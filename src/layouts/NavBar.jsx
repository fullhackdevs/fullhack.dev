import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.primary.yellow};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const links = [
  { text: 'HOME', path: '/' },
  { text: 'EPISODES', path: '/blog' },
  { text: 'ABOUT', path: '/about' },
];

const renderLinks = links =>
  links.map(link => <Link to={link.path}>{link.text}</Link>);

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} width="100px" hight="100px" alt="Fullhack Dev Logo" />
    </StyledLink>
    <Nav>{renderLinks(links)}</Nav>
  </Headroom>
);

export default NavBar;
