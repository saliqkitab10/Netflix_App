import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../screens/HomeScreen';
import {DownloadScreenProps} from '../screens/DownloadsScreen';
const Footer = () => {
  return (
    <View>
      <View style={styles.bottomElement}>
        <TouchableOpacity>
          <Image
            style={styles.homeIcon}
            source={require('./assets/homeIcon.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.favoriteIcon}
            source={require('./assets/favoritesIcon.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.downloadIcon}
            source={require('./assets/downloadIcon.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
