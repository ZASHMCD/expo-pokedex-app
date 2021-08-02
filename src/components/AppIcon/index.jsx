// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Image } from './styles';

export const AppIcon = ({ photo }) => (
  <Image source={{ uri: photo }} />
);

AppIcon.propTypes = {
  photo: PropTypes.string
};
