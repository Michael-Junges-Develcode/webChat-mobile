import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height;
const text = props => props.theme.text;
const textLight = props => props.theme.textLight;

export const Container = styled.View`
  background-color: ${props => props.theme.card};
  padding: 20px;
  margin-bottom: 12px;
`;

export const UserInfoWrapper = styled.View`
  height: 60px;
  flex-direction: row;
`;

export const Profile = styled.Image.attrs({})`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const UserTextWrapper = styled.View`
  flex: 1;
  padding-left: 3%;
`;

export const Username = styled.Text`
  color: ${text};
  font-family: 'NotoSans-SemiBold';
`;

export const UserBio = styled.Text`
  font-family: 'NotoSans-Regular';
  color: ${textLight};
`;

export const ContentText = styled.Text`
  font-family: 'NotoSans-Regular';
  color: ${text};
`;

export const CommentLabel = styled(Username)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ContentWrapper = styled.View`
  padding: 20px 0 20px 0;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  border-radius: 10px;
  background-color: ${props => props.theme.border};
`;

export const CommentsWrapper = styled.View`
  align-items: flex-start;
`;

export const CommentInputWrapper = styled.View`
  background-color: black;
  width: 100%;
  height: 60px;
  border-radius: 10px;
`;

export const CommentInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.textLight,
  color: props.theme.text,
}))`
  background-color: ${props => props.theme.border};
  width: 100%;
  height: 60px;
  border-radius: 10px;
`;
