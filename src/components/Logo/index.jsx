// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Image } from './styles';

// Shared Components
import { SharedContainer } from '../shared';

export const Logo = ({ image }) => (
  <SharedContainer>
    <Image source={{ uri: image }} />
  </SharedContainer>
);

Logo.propTypes = {
  image: PropTypes.string,
};
