import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupFindAll() {
  try {
    const storedGroups = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storedGroups ? JSON.parse(storedGroups) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
