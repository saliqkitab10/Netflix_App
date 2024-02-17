import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TitleBar from '../components/TitleBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import DefaultRibbon from '../components/DefaultRibbon';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {SafeAreaView} from 'react-native-safe-area-context';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBar></TitleBar>
      <SearchBar></SearchBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DefaultRibbon heading="Popular Shows"></DefaultRibbon>
        <DefaultRibbon heading="Horror Movies"></DefaultRibbon>
        <DefaultRibbon heading="Popular TV Shows"></DefaultRibbon>
        <DefaultRibbon heading="Popular in USA"></DefaultRibbon>
        <DefaultRibbon heading="Popular in India"></DefaultRibbon>
      </ScrollView>
      <View style={styles.bottomElement}>
        <TouchableOpacity>
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e1a',
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
