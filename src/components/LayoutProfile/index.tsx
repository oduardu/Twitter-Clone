import React from 'react';

import ProfilePageIndex from '../ProfilePageIndex'
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
        <Wrapper>
            <MenuBar />
            <ProfilePageIndex />
            <SideBar />
        </Wrapper>
    </Container>
  )
}

export default Layout;