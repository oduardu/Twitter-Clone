import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  text?: string,
  image?: string,
  time?: string,
  likes?: number,
  comments?: number,
  retweets?: number,
}

const Tweet: React.FC<Props> = (
  {
    text,
    image,
    time,
    likes = 1,
    retweets = 2,
    comments = 0,
  }
) => {
  return (
    <Container>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>👻</strong>
            <span>@duardopz</span>
            <Dot />
            <time>{time}</time>
          </Header>

          <Description>{text}</Description>

          {(image ? <ImageContent src={image} /> : '')}


          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;