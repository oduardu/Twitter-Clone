import React from 'react';

import { Container, Item, Tittle } from './styles';

interface Props {
    tittle: string;
    elements: React.ReactNode[]
    }

const List: React.FC<Props> = ({
    tittle,
    elements
}) => {
  return (
    <Container>
        <Item>
            <Tittle>{tittle}</Tittle>
        </Item>
        {elements.map((element,index) => (
            <Item key={index}>{element}</Item>
        ))}
    </Container>
  )
}

export default List;