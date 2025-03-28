import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Container, Content, UsersIcon } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const { navigate } = useNavigation();

  function doNewGroup() {
    navigate("Players", { group: "Rocket" });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersIcon />
        <HighLight title="New Group" subTitle="Create a group to add peoples" />
        <Input placeholder="Group name" />
        <Button style={{ marginTop: 24 }} title="Create group" onPress={doNewGroup} />
      </Content>
    </Container>
  );
}
