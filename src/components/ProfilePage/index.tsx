import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, Followage, CakeIcon, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>
            Editar Perfil
            </EditButton>
            <h1>Eduardo Pazzini Zancanaro</h1>
            <h2>@duardopz</h2>
            <p>
                React Developer Trainer
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Cascavel, Paraná
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 23/02/2005
                </li>
            </ul>

            <Followage>
                <span><strong>147 </strong> Seguindo</span>
                <span>
                    <strong>1680 </strong> Seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  )
}

export default ProfilePage;