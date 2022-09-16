import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ActiveButton(props) {
  console.log(props);
  console.log(props.text);
  console.log('LigthButton');
   console.log('Привет');

  return (
    <View style={styles.call}>
      <Text style={styles.text}>Звонок</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  call: {
    backgroundColor: '#FB7360',
    borderRadius: 16,
    flex: 1,
    height: 52,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  },
});
