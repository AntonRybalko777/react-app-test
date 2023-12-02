import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

export const UserMenu = () => {
  const login = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <span style={{ marginRight: '10px' }}>Welcome, {login}</span>
      <IconButton onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </>
  );
};
