// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

// Styled Components
import {
  Container, IconView, Content, Title, Text
} from './styles';

export const MenuItem = ({ icon, title, text }) => (
  <Container>
    <IconView>
      <Ionicons name={icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Container>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
