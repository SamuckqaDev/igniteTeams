import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState<string>("Team 1");
  const [players, setPlayers] = useState<string[]>([]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subTitle="Add players and split teams" />
      <Form>
        <Input placeholder="Person's name" autoCorrect={false} />
        <ButtonIcon iconName="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Team 1", "Team 2", "Team 3"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => console.log("REMOVING")} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="There are no people at this time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <Button title="Remove Group" type="SECONDARY" />
    </Container>
  );
}
