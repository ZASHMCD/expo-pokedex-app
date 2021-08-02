// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Text } from './styles';

// Shared Components
import { SharedContainer } from '../shared';

export const PokemonInfo = ({ info, color }) => (
  <SharedContainer color={color}>
    <Text>{info}</Text>
  </SharedContainer>
);

PokemonInfo.propTypes = {
  info: PropTypes.string,
  color: PropTypes.string
};
