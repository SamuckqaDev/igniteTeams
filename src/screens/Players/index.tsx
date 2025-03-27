import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Group name" subTitle="Add players and split teams" />
      <Form>
        <Input placeholder="Person's name" autoCorrect={false} />
        <ButtonIcon iconName="add" />
      </Form>
    </Container>
  );
}
