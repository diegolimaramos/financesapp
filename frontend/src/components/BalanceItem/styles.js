import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 300px;
  border-radius: 8px;
  margin-left: 14px;
  margin-right: 14px;
  padding-left: 14px;
  background-color: #${props => props.bg};
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 19px;
  color: #F2F8FD;
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #F2F8FD;
`;