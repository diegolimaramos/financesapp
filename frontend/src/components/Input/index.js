import * as S from "./styles";

export default function Input({
  placeholder,
  autoCorrect,
  autoCapitalize,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  validation,
  maxLength
}) {
  return (
    <S.Input
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      value={value}
      validation={validation}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  );
}
