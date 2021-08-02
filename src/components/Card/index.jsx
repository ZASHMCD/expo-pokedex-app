// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { nameCapitalized } from '../../utils';

// Styled Components
import {
  Container, Cover, Image, Title,
  // Content, Logo, TextWrapper, Caption, Subtitle
} from './styles';

export const Card = ({
  image, title, id
}) => (
  <Container>
    <Cover>
      <Image source={{ uri: image }} />
      <Title>{`${id} ${nameCapitalized(title)}`}</Title>
    </Cover>
  </Container>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};
