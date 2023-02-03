import * as S from "./styles";

export default function Button({ children, onPress }) {
  return (
    <S.Button activeOpacity={0.8} onPress={onPress}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}
