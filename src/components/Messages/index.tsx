import React from 'react';
import MenuBar from '../MenuBar';
import MessagesList from '../MessagesList';
import CoversationBox from '../ConversationBox';

import { Container, Wrapper } from './styles';

const Messages: React.FC = () => {
  return (
    <Container> 
        <Wrapper> 
          <MenuBar />
          <MessagesList />
          <CoversationBox />
        </Wrapper>
    </Container>
  );
}

export default Messages;