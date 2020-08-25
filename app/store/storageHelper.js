// this file is where asyncStorage funcs live

import AsyncStorage from "@react-native-community/async-storage";
import { login } from "./singleUser";
const STORAGE_KEY = "@save_user";

export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, user);
    alert("saved user successfully!");
  } catch (e) {
    alert("failed to save user!");
  }
};

export const readUser = async () => {
  try {
    const user = await AsyncStorage.getItem(STORAGE_KEY);
    if (user !== null) {
      // run log in
      login(user);
    }
  } catch (e) {
    alert("failed to read user!");
  }
};