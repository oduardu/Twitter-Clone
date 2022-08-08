import React from 'react';



import { Container, DmTo, Avatar, DmInfo } from './styles';

const DmMessage: React.FC = () => {
  return (
    <Container>
        <DmTo to={`/messages/`}>
        <div>
                <Avatar />
                <DmInfo> 
                <span>Nome do usuário</span><strong> @user . 9 h </strong>
                <p>Mensagem asdas</p>
                </DmInfo>
        </div>
        </DmTo>
    </Container>
  )
}

export default DmMessage;