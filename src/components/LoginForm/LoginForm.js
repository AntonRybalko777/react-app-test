import { useSelector, useDispatch } from 'react-redux';
import { selectLogin, selectPassword } from 'redux/selectors';
import { logIn } from 'redux/authSlice';

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
      console.log('Logged in!');
      return;
    }
    console.log('Incorrect login or password!');
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login
        <input name="login" type="text" placeholder="Enter login" />
      </label>
      <label>
        Password
        <input name="password" type="password" placeholder="Enter password" />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
};
