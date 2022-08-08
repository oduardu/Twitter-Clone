import React from 'react';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import StickyBox from 'react-sticky-box'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no twitter" />
            <SearchIcon />
        </SearchWrapper>
        <StickyBox>
        <Body>
            <List
                tittle="Talvez você curta"
                elements={[
                    <FollowSuggestion
                        name="Lucas Belini"
                        nickname="@soulucasas"
                        url="https://pbs.twimg.com/profile_images/1551055359913115648/F2hgNsFA_400x400.jpg"
                    />,
                    <FollowSuggestion
                    name="Filipe Medeiros"
                    nickname="@umfilipe"
                    url="https://pbs.twimg.com/profile_images/1469526333109723136/Bu42gVRZ_400x400.jpg"
                    />
                ]}
            />
            <List
                tittle="Talvez você curta"
                elements={[
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>,
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>,
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>,
                ]}
            />
            <List tittle='O que está acontecendo'
                elements={[
                    <News
                        tittle="Vai ser o melhor dia da minha vida"
                        description="Não sei o que vai acontecer hoje"
                        tags={["vaiSer"]}
                    />,
                    <News 
                        tittle="In the End"
                        description="The end is here"
                        tags={["theEnd", "inTheEnd"]}
                    />,
                    <News 
                        tittle="Kpop"
                        description="Kpop is the Best!"
                        tags={["kpop", "kpopIsTheBest"]}
                    />,
                ]}
            />
        </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;