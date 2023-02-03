import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export default function useTogglePasswordVisibility() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const show = <Icon name="eye" size={20} color="#4B4B4B" />;
  const hide = <Icon name="eye-off" size={20} color="#4B4B4B" />;

  const icon = passwordVisibility ? show : hide;

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return {
    passwordVisibility,
    icon,
    handlePasswordVisibility,
  };
}
