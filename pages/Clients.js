import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClientItem({ client }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.row, styles.shadow]}>
        <Image source={client.photo} style={styles.avatar} />
        <View style={styles.textBlock}>
          <Text style={styles.name}>{client.name}</Text>
          <Text style={styles.city}>{client.city}</Text>
        </View>
        <Image
          style={styles.arrow}
          source={require('../assets/Navigation.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  row: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 16,
    height: 92,
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 10,
    height: 44,
    width: 44,
  },
  textBlock: {
    height: 44,
    marginLeft: 10,
    flex: 1,
  },
  name: {
    height: 24,
    fontWeight: '600',
    fontSize: 16,
  },
  city: {
    color: '#A3A3A3',
    lineHeight: 24,
  },
  arrow: {
    marginRight: 16,
    width: 24,
    height: 24,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.41,

    elevation: 2,
  },
});
