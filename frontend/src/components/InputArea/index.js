import * as S from "./styles";

export default function InputArea({ children }) {
  return (
    <S.Container style={{ elevation: 4}}>
      { children }
    </S.Container>
  );
}
