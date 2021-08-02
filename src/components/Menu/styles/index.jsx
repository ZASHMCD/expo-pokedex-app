// Dependecies
import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

export const ClosedView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.View`
  height: ${props => props.screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;
