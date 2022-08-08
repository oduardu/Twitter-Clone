import React from 'react';
import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <>
        <Container>
        <Tab selected>Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
        </Container>
        <Tweets>
            <Tweet likes={5} retweets={3} comments={0} text='oie isso é um tweet test :)' time='4 h'/>
            <Tweet likes={1} retweets={1} comments={0}  text='o pae é mt atacante' image='https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' time='10 h'/>
            <Tweet text='Vite | ReactJS | Styled Components' time='5 de ago'/>
        </Tweets>
      </>
  );
}

export default Feed;