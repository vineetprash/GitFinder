import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GitData } from "../interfaces";
import Card from "./Card";

export default function UserCard({ gitData }: { gitData: GitData }) {
  return (
    <View>
      {gitData.login !== "" && gitData.status !== "404" && (
        <Card>
          <View
            style={{
              // margin: 20,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: gitData.avatar_url }}
              height={60}
              width={60}
              alt="profile_pic"
              style={styles.profile}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              {gitData.login}
            </Text>
          </View>
          {gitData.name && (
            <View style={styles.section}>
              <Text style={styles.subheading}>Name </Text>
              <Text style={styles.text}>{gitData.name}</Text>
            </View>
          )}
          {gitData.bio && (
            <View style={styles.section}>
              <Text style={styles.subheading}>Bio </Text>
              <Text style={styles.text}>{gitData.bio}</Text>
            </View>
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Followers: {gitData.followers}</Text>
            <Text style={styles.text}>Following: {gitData.following}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>
              Public repos: {gitData.public_repos}
            </Text>
            <Text style={styles.text}>
              Public gists: {gitData.public_gists}
            </Text>
            <Text style={styles.text}>
              Joined: {new Date(gitData.created_at).getFullYear()}
            </Text>
          </View>
        </Card>
      )}
      {gitData.status === "404" && <Text>User not found</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    borderRadius: 50,
    margin: 8,
  },
  text: {
    color: "white",
  },
  subheading: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    alignItems: "flex-start",

    textDecorationLine: "underline",
  },
  section: {
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
  },
  infoContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 20,
    borderRadius: 20,

    // textDecorationStyle: "dotted",
    // flexDirection: "column",
  },
});

// alignItems: "flex-start",
