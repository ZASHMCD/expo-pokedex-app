// Dependencies
import styled from 'styled-components';

export const SharedSubtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 8px;
  text-transform: uppercase;
`;

export const SharedContainer = styled.View`
  flex-direction: row;
  background: ${(props) => (props.color ? props.color : 'white')};
  height: 60px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 8px;
`;
