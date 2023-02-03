import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 2;
  align-items: center;
  background-color: #F2F8FD;
`;

export const CurrentBalance = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const MovementsArea = styled.View`
  flex: 1;
  flex-direction: column;
  align-content: flex-start;
  padding: 10px 32px;
  margin-top: 20px;
  width: 100%;
  background-color: #FFFFFF;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-radius: 8px;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Movements = styled.View`
  flex: 1;
  border-radius: 8px;
  margin-top: 10px;
`;

export const Message = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  color: #3E4685;
`;

export const DataHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;
