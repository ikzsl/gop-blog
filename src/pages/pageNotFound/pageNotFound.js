import React from 'react';
import { Container } from './style';

import image from '../../img/gopit.png';

export default () => (
  <Container>
    <h1>404</h1>
    <h2>Страница не найдена</h2>
    <img src={image} alt="" />
  </Container>
);
