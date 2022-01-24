import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';

import './_app.scss';

const App = () => {
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
          <HomeScreen />
        </Container>
      </div>
      {/* <LoginScreen /> */}
    </>
  );
};

export default App;
