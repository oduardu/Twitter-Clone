import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string,
    nickname: string,
    url: string,
}

const FollowSuggestion: React.FC<Props> = ({
    name,
    nickname,
    url,
}) => {
  return  (
    <Container>
        <div>
            <Avatar src={url} />
            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>
        </div>
        <FollowButton>Seguir</FollowButton>
    </Container>  
    )
}

export default FollowSuggestion;