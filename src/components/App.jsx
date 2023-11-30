import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Main from 'pages/main';
import Admin from 'pages/admin';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};
