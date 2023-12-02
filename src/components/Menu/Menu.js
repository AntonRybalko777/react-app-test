import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBar, Toolbar, Typography } from '@mui/material';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static" style={{ marginBottom: '20px' }}>
      <Toolbar>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <StyledNavLink to="/">Main</StyledNavLink>
          {isLoggedIn && <StyledNavLink to="/admin">Admin</StyledNavLink>}
        </nav>
        <Typography sx={{ ml: 'auto' }}>
          {!isLoggedIn ? (
            <StyledNavLink to="/login">Login</StyledNavLink>
          ) : (
            <UserMenu />
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
