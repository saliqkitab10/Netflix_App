import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {SafeAreaView} from 'react-native-safe-area-context';

export type DownloadScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DownloadsScreen'
>;

const DownloadsScreen = ({navigation}: DownloadScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar></TitleBar>
      <SearchBar></SearchBar>
      <View style={styles.messageContainer}>
        <Image
          style={styles.image}
          source={require('../components/assets/noDownloadsIcon.png')}></Image>
        <Text style={styles.message}>No Downloads yet</Text>
      </View>
      <View style={styles.bottomElement}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={styles.homeIcon}
            source={require('../components/assets/homeIcon.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.favoriteIcon}
            source={require('../components/assets/favoritesIcon.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DownloadsScreen')}>
          <Image
            style={styles.downloadIcon}
            source={require('../components/assets/downloadIcon.png')}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DownloadsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e1a',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: '900',
    color: 'hsl(0, 0%, 100%)',
  },
  image: {
    height: 100,
    width: 100,
  },
  bottomElement: {
    backgroundColor: '#333945',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    height: 30,
    width: 30,
    marginLeft: 25,
  },
  downloadIcon: {
    height: 30,
    width: 30,
    marginRight: 25,
  },
  favoriteIcon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
