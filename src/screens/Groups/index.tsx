import { Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Groups" subTitle="Play with your team" />
      <GroupCard title="Ignite Guys" onPress={() => console.log("card 1")} />
    </Container>
  );
}
