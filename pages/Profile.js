import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ActiveButton from "../components/ActiveButton";
import LigthButton from "../components/LigthButton";
import MoreButton from "../components/MoreButton";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Profile({ navigation, route }) {
  const client = route.params?.client;
  //console.log(client)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity onPress={() => navigation.navigate("Clients")}>
          <Image
            style={styles.icon}
            onPress={() => alert("GHJK")}
            source={require("../assets/arrow-left.svg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={require("../assets/Edit_Square.svg")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.image, styles.shadow]}>
        <View style={styles.circle} />
        <Image style={styles.image} source={client?.photo} />
      </View>
      <Text style={styles.name}>{client?.name}</Text>
      <Text style={styles.city}>{client?.city}</Text>
      <View style={styles.buttonContainer}>
        <ActiveButton text="Чат" ligth />
        <LigthButton text="Звонок" active />
      </View>
      <Text style={styles.header}>Биография</Text>
      <Text style={styles.content}>{client?.bio}</Text>
      <View style={styles.moreButton}></View>
      <MoreButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  name: {
    marginTop: 16,
    color: "#212322",
    fontWeight: "700",
    fontSize: 24,
    alignSelf: "center",
  },
  city: {
    marginTop: 6,
    marginBottom: 32,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    borderRadius: 140,
  },
  container: {
    backgroundColor: "#FFF8F8",
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 42,
    fontWeight: "bold",
    color: "#333333",
    fontSize: 20,
  },
  content: {
    color: "#4F4F4F",
    fontSize: 14,
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  moreButton: {
    marginTop: 20,
  },
});
