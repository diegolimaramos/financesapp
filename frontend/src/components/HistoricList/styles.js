import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom: 1px solid #BCBDBD;
  border-color: #BCBDBD;
  height: 80px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: #454444;
`;

export const ValueText = styled.Text`
  font-size: 22px;
  color: ${props => props.tipo === "despesa" ? "#Ef463a" : "#00b94a"};
`;