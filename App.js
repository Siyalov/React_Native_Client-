import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import ActiveButton from './components/ActiveButton';
import LigthButton from './components/LigthButton';
import MoreButton from './components/MoreButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <Image
          style={styles.image}
          source={require('./assets/arrow-left.svg')}
        />
        <Image
          style={styles.image}
          source={require('./assets/Edit_Square.svg')}
        />
      </View>
      <View style={[styles.image, styles.shadow]}>
        <View style={styles.circle} />
        <Image style={styles.image} source={require('./assets/image89.svg')} />
      </View>
      <Text style={styles.name}>Сергей Чернышев</Text>
      <Text style={styles.sity}>Казань</Text>
      <View style={styles.buttonContainer}>
        <ActiveButton text="Чат" ligth />
        <LigthButton text="Звонок" active />
      </View>
      <Text style={styles.header}>Биография</Text>
      <Text style={styles.content}>
        Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней
        дочкой. {'\n'} {'\n'}
        По образованию маркетолог, много лет работал на крупные компании. Теперь
        решил погрузиться в мир IT.
      </Text>
      <MoreButton />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {},
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 16,
    alignSelf: 'stretch',
  },
  name: {
    marginTop: 16,
    color: '#212322',
    fontWeight: '700',
    fontSize: 24,
    marginLeft: 14,
  },
  sity: {
    marginLeft: 100,
    marginTop: 6,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 140,
  },
  container: {
    backgroundColor: '#FFF8F8',
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 42,
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 20,
  },
  content: {
    color: '#4F4F4F',
    fontSize: 14,
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
