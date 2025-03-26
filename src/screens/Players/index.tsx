import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Group name" subTitle="Add players and split teams" />
    </Container>
  );
}
