import { FlatList, Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupFindAll } from "@storage/group/groupFindAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  function doNewGroup() {
    navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupFindAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <HighLight title="Groups" subTitle="Play with your team" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsHorizontalScrollIndicator
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="How about registering the first group?" />
        }
      />
      <Button title="Register group" onPress={doNewGroup} />
    </Container>
  );
}
