import styled from 'styled-components/native';

const text = props => props.theme.text;
const textLight = props => props.theme.textLight;

export const Container = styled.View`
  background-color: ${props => props.theme.border};
  padding: 20px;
  margin-top: 15px;
  border-radius: 10px;
`;

export const UserAndDateWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.Text`
  color: ${text};
  font-family: 'NotoSans-SemiBold';
`;

export const Content = styled.Text`
  font-family: 'NotoSans-Regular';
  color: ${text};
  padding-top: 10px;
`;

export const Date = styled.Text`
  font-family: 'NotoSans-Regular';
  color: ${textLight};
`;

export const Profile = styled.Image.attrs({})`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-right: 10px;
`;
