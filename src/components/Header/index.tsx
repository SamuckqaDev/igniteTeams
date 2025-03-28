import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logo from "@assets/img/logo.png";


type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();

  function doBackButton() {
    navigate("Groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={doBackButton}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  );
}
