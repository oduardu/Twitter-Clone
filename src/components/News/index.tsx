import React from 'react';

import { Container } from './styles';

interface Props {
  tittle: string,
  description: string,
  tags: string[],
}

const News: React.FC<Props> = (
  {
    tittle,
    description,
    tags,
  }
) => {
  return (
    <Container>
        <span>{tittle}</span>
        <strong>{description}</strong>
        <div>
            <p>Assuntos do Momento:</p>{tags.map((tags) =>
            <a>{tags}</a>
            )}
        </div>
    </Container>
  )
}

export default News;