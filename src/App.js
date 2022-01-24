import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';

import './_app.scss';

const Layout = () => {
  const [toggleSidebar, setToggleSideBar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSideBar(!toggleSidebar);
  };

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <SideBar
          toggleSidebar={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className='app__main '>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, navigate]);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path='search' element={<SearchScreen />} />
      </Route>
      <Route path='/auth' element={<LoginScreen />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
