// Dependencies
import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

// Redux Actions
import { toggleMenuAction } from '../../store/actions/toggleMenu.action';

// Components
import { MenuItem } from '../MenuItem';

// Styled Components
import {
  AnimatedContainer, Cover, Image, Title, Subtitle, ClosedView, Content
} from './styles';

// Data
import { items } from '../../data';

export const Menu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.isOpen.isOpen);
  const screenHeight = Dimensions.get('window').height;
  const top = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false
      }).start();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    dispatch(toggleMenuAction(false));
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require('../../../assets/background.jpg')} />
        <Title>Credits</Title>
        <Subtitle>Pokemon List by @jesuskata</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1
        }}
      >
        <ClosedView>
          <Ionicons
            name="ios-close"
            size={44}
            color="#546bfb"
          />
        </ClosedView>
      </TouchableOpacity>
      <Content screenHeight={screenHeight}>
        {items.map(item => (
          <MenuItem
            key={item.icon}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};
