import React from 'react';

import { Container, Header, SettingsIcons, NewMessageIcon, Icons } from './styles';


const MessageHeader: React.FC = () => {
  return (
    <Container>
            <Header>
                <span>Messages</span>
                <Icons>
                    <SettingsIcons />
                    <NewMessageIcon />
                </Icons>
            </Header>
    </Container>
    )
}

export default MessageHeader;