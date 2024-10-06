import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#415a77",
    padding: 20,
    margin: 8,
    elevation: 15,
    color: "white",
    display: "flex",
    // alignItems: "center",
    borderRadius: 10,
    shadowOpacity: 10,
    shadowColor: "black",
  },
});
