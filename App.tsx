import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  VirtualizedList,
} from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { GitData } from "./interfaces";
// const UserCard = React.lazy(() => import("./components/userCard"));

export default function App() {
  const URL = "https://api.github.com/users";
  const [username, setUsername] = useState("");
  const [data, setData] = useState<GitData>({
    avatar_url: "",
    login: "",
    name: "",
    bio: "",
    created_at: "",
    updated_at: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    public_gists: 0,
  });

  const fetchData = useCallback((username: string) => {
    fetch(URL + `/${username}`).then(async (res) => {
      const json = await res.json();
      setData(json);
    });
    console.log("hello");
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <UserCard gitData={data} />
          <View style={styles.input_container}>
            <TextInput
              placeholder="github username"
              onChangeText={setUsername}
              style={{ color: "white", flex: 2 }}
              placeholderTextColor={"grey"}
              underlineColorAndroid={"cyan"}
              cursorColor={"orange"}
            />
            <Button
              onPress={() => {
                fetchData(username.replace(" ", ""));
                console.log(data);
              }}
              title="FETCH"
              color={"#415a77"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#0d1b2a",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#0d1b2a",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input_container: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    gap: 30,
    margin: 30,
    padding: 20,
    backgroundColor: "#1b263b",
    // width: "100%",
  },
});
