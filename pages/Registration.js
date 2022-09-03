import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import InputField from '../components/InputField';

export default function Registration() {
  console.log('Registration');

  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <Image
          style={styles.icon}
          source={require('../assets/arrow-left.svg')}
        />
        <Text style={styles.title}>Добавить нового</Text>
        <View></View>
      </View>
      <View style={styles.fields}>
        <InputField />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8F8',
    flex: 1,
    padding: 24,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  title: {
    fontWeight: 'bold',
  },
});
