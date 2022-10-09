import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import InputField from '../components/InputField';

export default function Registration({ navigation }) {
  console.log('Registration');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('Clients' )}>
          <Image
            style={styles.icon}
            onPress={() => alert('GHJK')}
            source={require('../assets/arrow-left.svg')}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Добавить нового</Text>
        <View></View>
      </View>
      <View style={styles.fields}>
        <InputField navigation={navigation} />
      </View>
    </SafeAreaView>
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
