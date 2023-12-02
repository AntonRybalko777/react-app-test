import { useSelector, useDispatch } from 'react-redux';
import { selectLogin, selectPassword } from 'redux/selectors';
import { logIn } from 'redux/authSlice';
import { TextField, Button } from '@mui/material';
import { StyledDiv } from './LoginForm.styled';
import toast, { Toaster } from 'react-hot-toast';

const notifyError = () => toast.error('Incorrect login or password.');

export const LoginForm = () => {
  const dispatch = useDispatch();
  const adminLogin = useSelector(selectLogin);
  const adminPassword = useSelector(selectPassword);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      evt.target.elements.login.value === adminLogin &&
      evt.target.elements.password.value === adminPassword
    ) {
      dispatch(logIn());
    } else {
      notifyError();
    }
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
