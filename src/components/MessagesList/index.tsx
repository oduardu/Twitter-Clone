import React from 'react';
import DmMessage from '../DmMessage';

import MessageHeader from '../MessageHeader';

import { Container, SearchInput, Header, SearchWrapper, SearchIcon, } from './styles';

const MessagesList: React.FC = () => {
  return (
    <Container>
        <Header>
        <MessageHeader />
        </Header>
        <SearchWrapper>
            <SearchInput placeholder='Pesquisar mensagens diretas' />
            <SearchIcon />
        </SearchWrapper>
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
        <DmMessage />
    </Container>
    );
}

export default MessagesList;