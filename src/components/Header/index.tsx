import { Container, Logo } from "./styles";
import logo from "@assets/img/logo.png";

export function Header(){
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  )
}