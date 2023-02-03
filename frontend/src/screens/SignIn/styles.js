import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #F2F8FD;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
  height: 90px;
  width: 90px;
`;

export const ButtonPassword = styled.Pressable`
  margin-left: 16px;
`;

export const AreaNewAccount = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%; 
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  text-decoration: underline;
  color: #4B4B4B;
`;
