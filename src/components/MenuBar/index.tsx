import React from 'react';

import { Container, TwitterLogo, AddTweetIcon, BottomSide, Avatar, ProfileData, ExitIcon, TopSide, MenuButton, HomeIcon, HashtagIcon, BellIcon, EmailIcon, SaveIcon, ListIcon, ProfileIcon, MoreIcon } from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <TopSide>
            <MenuButton to="/">
                <TwitterLogo />
            </MenuButton>
            <MenuButton to="/">
                <HomeIcon />
                <span>Home</span>
            </MenuButton>
            
            <MenuButton to="/">
                <HashtagIcon />
                <span>Explorar</span>
            </MenuButton>
            
            <MenuButton to="/">
                <BellIcon />
                <span>Notificações</span>
            </MenuButton>

            <MenuButton to="/messages">
                <EmailIcon />
                <span>Mensagens</span>
            </MenuButton>

            <MenuButton to="/">
                <SaveIcon />
                <span>Itens Salvos</span>
            </MenuButton>
            
            <MenuButton to="/">
                <ListIcon />
                <span>Listas</span>
            </MenuButton>

            <MenuButton to="/profile" selected={true}>
                <ProfileIcon />
                <span>Perfil</span>
            </MenuButton>
            
            <MenuButton to="/">
                <MoreIcon />
                <span>Mais</span>
            </MenuButton>
            <Button>
                <AddTweetIcon />
                <span>Tweetar</span>
            </Button>
        </TopSide>
        <BottomSide>
            <Avatar />
            <ProfileData>
                <strong>Eduardo Pazzini Zancanaro</strong>
                <span>@duardopz</span>
            </ProfileData>

            <ExitIcon />
        </BottomSide>
    </Container>
    );
}

export default MenuBar;