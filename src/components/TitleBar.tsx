import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TitleBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.iconImage}
          source={require('./assets/menuButton.png')}
        />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            style={styles.netflixImage}
            source={require('../components/assets/netflixIcon.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  iconContainer: {},
  headerContainer: {},
  netflixImage: {
    height: 42,
    width: 180,
    marginHorizontal: '19%',
  },

  iconImage: {
    marginLeft: 4,
    height: 42,
    width: 50,
  },
});
