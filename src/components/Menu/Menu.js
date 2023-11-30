import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Menu = () => {
  return (
    <nav>
      <StyledNavLink to="/">Main</StyledNavLink>
      <StyledNavLink to="/admin">Admin</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </nav>
  );
};
