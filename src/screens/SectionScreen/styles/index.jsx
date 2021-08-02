// Dependencies
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const Cover = styled.View`
  height: 375px;
`;

export const Image = styled.Image`
  width: 75%;
  height: 75%;
  position: absolute;
  top: 25%;
  left: 15%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

export const Caption = styled.Text`
  color: black;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

export const CloseView = styled.View`
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

export const Content = styled.View`
  padding: 8px;
`;

export const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
