import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <StyledNavLink to="/">Main</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/admin">Admin</StyledNavLink>}
      {!isLoggedIn ? (
        <StyledNavLink to="/login">Login</StyledNavLink>
      ) : (
        <UserMenu />
      )}
    </nav>
  );
};
