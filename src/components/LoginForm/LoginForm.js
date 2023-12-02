import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { logIn } from 'redux/authSlice';
import { TextField, Button } from '@mui/material';
import { StyledDiv } from './LoginForm.styled';
import toast, { Toaster } from 'react-hot-toast';

const notifyError = () => toast.error('Incorrect login or password.');

export const LoginForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleSubmit = evt => {
    evt.preventDefault();
    users.forEach(user => {
      if (
        user.login === evt.target.elements.login.value &&
        user.password === evt.target.elements.password.value
      ) {
        dispatch(logIn(user.login));
      } else {
        notifyError();
      }
    });
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <TextField name="login" label="Login" variant="outlined" required />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
        <Toaster />
      </StyledDiv>
    </form>
  );
};
