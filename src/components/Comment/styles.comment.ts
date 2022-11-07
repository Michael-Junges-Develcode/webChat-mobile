import styled from 'styled-components/native';

const text = props => props.theme.text;
const textLight = props => props.theme.textLight;

export const Container = styled.View`
  background-color: ${props => props.theme.border};
  padding: 20px;
  margin-top: 15px;
  border-radius: 10px;
`;

export const Content = styled.Text`
  font-family: 'NotoSans-Regular';
  color: ${textLight};
`;
