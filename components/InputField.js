import React from "react";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function ImputField({ navigation }) {
  console.log("ImputField");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const onAddClick = () => {
    const client = { name, phone, city, bio };
    navigation.navigate("Clients", { newClient: client });
  };

  return (
    <SafeAreaView style={styles.field}>
      <Text style={styles.label}>Фото</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoto}
        value={photo}
        placeholder="Вставьте ссылку на фото"
        keyboardType="numeric"
      />
      <Text style={styles.label}>ФИО</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Введите фамилию и имя"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Номер телефона</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="+7 (000) 000 00 00"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Город</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Выберите город"
        keyboardType="numeric"
      />
      <Text style={styles.label}> Био</Text>
      <TextInput
        style={styles.input2}
        onChangeText={setBio}
        value={bio}
        multiline={true}
        numberOfLines={4}
        placeholder="Укажите хобби, интересы, образование и стаж работы"
        keyboardType="numeric"
      />
      <View style={styles.marginBottom}></View>
      <TouchableOpacity style={styles.more} onPress={onAddClick}>
        <Text style={[styles.text, styles.more]}>Добавить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    border: "none",
    backgroundColor: "#ededed",
  },
  input2: {
    height: 92,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    border: "none",
    backgroundColor: "#ededed",
  },
  field: {
    flexDirection: "column",
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
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
  marginBottom: {
    marginTop: 40,
  },
});
