import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #F2F8FD;
`;

export const PhotoArea = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const BtnPhoto = styled.Pressable`
  position: absolute;
  top: 60px;
  right: 0;
  padding: 8px;
  background-color: #FFFFFF;
  border: 1px solid #A3A4A7;
  border-radius: 25px;
`;

export const NameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3E4685;
  margin-top: 20px;
`;

export const DataArea = styled.View`
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

export const DataHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const DataBody = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  color: #4B4B4B;
`;

export const DataLabel = styled.Text`
  font-size: 16px;
  color: #3E4685;
  margin-left: 10px;
`;
