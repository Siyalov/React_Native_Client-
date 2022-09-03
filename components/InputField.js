import React from 'react';
import { useState } from 'react';
import { Text,TextInput, View, StyleSheet, SafeAreaView } from 'react-native';

export default function ImputField() {
  console.log('ImputField');
  const [inputState, setInputState] = useState('');

  return (
    <SafeAreaView style={styles.field}>
       <Text style={styles.label}>Фото</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputState}
        value={inputState}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,    
    borderWidth: 1,
    padding: 10,
    background: '#F7F7F7',
    borderRadius: 16,
    border: "none",
  },
  field: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  label:{
    marginBottom: 5,
  }
});
