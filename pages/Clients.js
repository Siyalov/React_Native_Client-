import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import ClientItem from '../components/ClientItem';

const client1 = {
  name: 'Петр Петров',
  photo: require('../assets/Petr.png'),
  city: 'Санкт-Петербург',
  phone: '+79117778812',
  bio: 'who is',
};
const client2 = {
  name: 'Иван Иванов',
  photo: require('../assets/Ivan.png'),
  city: 'Москва',
  phone: '+79211234567',
  bio: 'who is',
};
const client3 = {
  name: 'Антон Николаев',
  photo: require('../assets/Anton.png'),
  city: 'Выборг',
  phone: '+79054541012',
  bio: 'who is',
};

export default function Clients() {
  const [clients, setClients] = useState([client1, client2, client3]);
  const [findState, setFindState] = useState('');
  const onFind = e => {setFindState(e.target.value)};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Клиенты</Text>
      <TextInput
        style={styles.input}
        onChangeText={onFind}
        value={findState}
        placeholder="Поиск"
        keyboardType="numeric"
      />
      <View>
        {clients.map((client) => (
          <ClientItem client={client} />
        ))}
      </View>
    </View>
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
    marginTop:16,
    marginBottom:24,
    height: 40,
    borderWidth: 1,
    padding: 15,
    borderRadius: 16,
    border: 'none',
    background: '#F6F6F6',
  },
});
