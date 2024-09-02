import styled from "styled-components";

const NavbarLink = styled.a`
  color: #ecf0f1;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 1rem 2rem;
  color: #ecf0f1;
`;

export { Navbar, NavbarLink };
