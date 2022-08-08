import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const ConversationBox: React.FC = () => {
  return (
    <Container>
      <div>
      <h1>Selecione uma mensagem</h1>
      <p>Escolha entre as conversas existentes, inicie uma nova ou continue explorando.</p>
      <Button>
        <span>Nova conversa</span>
      </Button>
      </div>
    </Container>
    );
}

export default ConversationBox;