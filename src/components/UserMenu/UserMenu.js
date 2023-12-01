import { useSelector, useDispatch } from 'react-redux';
import { selectLogin } from 'redux/selectors';
import { logOut } from 'redux/authSlice';

export const UserMenu = () => {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();
  return (
    <>
      <span>Welcome, {login}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
    </>
  );
};
