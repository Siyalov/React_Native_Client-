import React from 'react';
import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';

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
        placeholder="Вставьте ссылку на фото"
        keyboardType="numeric"
      />
      <Text style={styles.label}>ФИО</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputState}
        value={inputState}
        placeholder="Введите фамилию и имя"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Номер телефона</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputState}
        value={inputState}
        placeholder="+7 (000) 000 00 00"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Город</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputState}
        value={inputState}
        placeholder="Выберите город"
        keyboardType="numeric"
      />
      <Text multiline style={styles.label}>
        {' '}
        Био
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputState}
        value={inputState}
        placeholder="Укажите хобби, интересы, '\n' образование и стаж работы"
        keyboardType="numeric"
      />
      <View style={styles.marginBottom}> </View>
      <View style={styles.more}>
        <Text style={[styles.text, styles.more]}>Добавить</Text>
      </View>
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
    border: 'none',
    backgroundColor: 'lightgrey',
  },
  field: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
  },
  more: {
    padding: 6,
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
  marginBottom: {
    marginTop: 95,
  },
});
