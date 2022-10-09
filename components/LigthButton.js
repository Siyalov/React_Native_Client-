import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function LigthButton(props) {
  console.log("LigthButton");

  return (
    <TouchableOpacity style={styles.chat}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chat: {
    borderColor: "#FB7360",
    borderWidth: 1.5,
    borderRadius: 16,
    flex: 1,
    height: 52,
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FB7360",
    lineHeight: 24,
  },
});
