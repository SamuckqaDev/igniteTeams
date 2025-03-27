import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIconStyleProps } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonIconStyleProps;
  iconName: ComponentProps<typeof MaterialIcons>["name"];
};

export function ButtonIcon({ type = "PRIMARY", iconName, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
}
