import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Header } from "@components/Header";
import { Container, Content, UsersIcon } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");
  const { navigate } = useNavigation();

  async function doNewGroup() {
    await groupCreate(group);
    navigate("Players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <UsersIcon />
        <HighLight title="New Group" subTitle="Create a group to add peoples" />
        <Input placeholder="Group name" onChangeText={setGroup} />
        <Button
          style={{ marginTop: 24 }}
          title="Create group"
          onPress={doNewGroup}
        />
      </Content>
    </Container>
  );
}
