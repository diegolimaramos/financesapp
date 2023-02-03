import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.8);
`;

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  background-color: #F2F8FD;
  padding: 10px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3E4685;
  border-radius: 8px;
  height: 52px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const ButtonFilterText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
`;