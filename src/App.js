import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';

import './_app.scss';

const Layout = ({ children }) => {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='search' element={<SearchScreen />} />
        </Route>
        <Route path='/auth' element={<LoginScreen />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
