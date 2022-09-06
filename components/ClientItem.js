import React from 'react';
import { Text, View } from 'react-native';

export default function ClientItem() {
  const client1 = {
    id: '1',
    name: 'Петр Петров',
    city: 'Санкт-Петербург',
    photo: require('../assets/Petr.png'),
  };
  const client2 = {
    id: '2',
    name: 'Иван Иванов',
    city: 'Москва',
    photo: require('../assets/Ivan.png'),
  };
  const client3 = {
    id: '3',
    name: 'Антон Николаев',
    city: 'Выборг',
    photo: require('../assets/Anton.png'),
  };
  return (
    <View>
      {clients.map((client) => (
        <ClientItem client={client} />
      ))}
      ;
    </View>
  );
}
