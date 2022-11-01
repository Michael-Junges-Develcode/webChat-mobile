import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
  padding: 20px;
  flex: 1;
`;
