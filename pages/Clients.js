import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import ClientItem from "../components/ClientItem";

const client1 = {
  name: "Петр Петров",
  photo: require("../assets/Petr.png"),
  city: "Санкт-Петербург",
  phone: "+79117778812",
  bio: "who is",
};
const client2 = {
  name: "Иван Иванов",
  photo: require("../assets/Ivan.png"),
  city: "Москва",
  phone: "+79211234567",
  bio: "who is",
};
const client3 = {
  name: "Антон Николаев",
  photo: require("../assets/Anton.png"),
  city: "Выборг",
  phone: "+79054541012",
  bio: "Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой. \n\nПо образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.",
};

let clients = [client1, client2, client3];

async function getClients() {
  const items = await AsyncStorage.getItem("client");
  if (items) {
    clients = JSON.parse(items);
  }
}
getClients();

async function storeClients() {
  const jsonValue = JSON.stringify(clients);
  await AsyncStorage.setItem("client", jsonValue);
}

export default function Clients({ navigation, route }) {
  useEffect(() => {
    if (route.params?.newClient) {
      clients.push(route.params?.newClient);
      storeClients();
      console.log(clients);
      onFind(findState);
      navigation.setParams({
        newClient: undefined,
      });
    }
  }, [route.params?.newClient, navigation, findState]);

  const [findState, setFindState] = useState("");
  const [filteredClients, setFilteredClients] = useState(clients);
  const onFind = (e) => {
    setFindState(e);
    setFilteredClients(
      clients.filter((client) => {
        return (
          client.name.toLowerCase().includes(e.toLowerCase()) ||
          client.phone.toLowerCase().includes(e.toLowerCase()) ||
          client.city.toLowerCase().includes(e.toLowerCase())
        );
      })
    );
  };
  const onClientClick = (client) => {
    navigation.navigate("Profile", { client });
  };
  const onRegistrationClick = () => {
    navigation.navigate("Registration", {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Клиенты</Text>
      <View style={styles.imageInput}>
        <Image style={styles.search} source={require("../assets/Icon3.svg")} />
        <TextInput
          style={styles.input}
          onChangeText={onFind}
          value={findState}
          placeholder="Поиск"
        />
      </View>
      <View>
        {filteredClients.map((client) => (
          <ClientItem client={client} onPress={onClientClick} />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.more, { marginTop: 100 }]}
        onPress={onRegistrationClick}
      >
        <Text style={[styles.text, styles.more]}>Добавить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  header: {
    fontSize: 34,
    fontWeight: 700,
  },
  input: {
    padding: 10,
  },
  search: {
    marginLeft: 15,
  },
  imageInput: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 24,
    alignItems: "center",
    borderRadius: 16,
    border: "none",
    background: "#F6F6F6",
  },
  more: {
    padding: 6,
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
