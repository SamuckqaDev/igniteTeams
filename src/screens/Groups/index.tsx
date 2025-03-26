import { FlatList, Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Rockeseat Guys",
    "Ignite Guys",
    "React Native Guys",
    "Java Guys",
    "Python Guys",
  ]);

  return (
    <Container>
      <Header />
      <HighLight title="Groups" subTitle="Play with your team" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsHorizontalScrollIndicator
      />
    </Container>
  );
}
