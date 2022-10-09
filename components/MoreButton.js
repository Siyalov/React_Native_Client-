import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function MoreButton() {
  return (
    <TouchableOpacity style={styles.more}>
      <Text style={[styles.text, styles.more]}>Показать больше</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  more: {
    padding: 5,
    backgroundColor: "#FB7360",
    borderRadius: 16,
    flex: 1,
    height: 52,
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    lineHeight: 24,
  },
});
