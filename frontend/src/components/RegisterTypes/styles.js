import styled from "styled-components/native";

export const RegisterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 47%;
  border-radius: 8px;
  border: 1.5PX solid ${props => props.checked ? "#3E4685" : "#E6E7F9"};
  background-color: ${props => props.checked ? "#E6E7F9" : "transparent"};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  color: #3E4685;
`;
