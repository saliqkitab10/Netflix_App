import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.windows}>
        <Image
          source={require('./assets/searchIcon.png')}
          style={styles.searchIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.windows}>
        <Text style={styles.windowsText}>Series</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.windows}>
        <Text style={styles.windowsText}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.windows}>
        <Text style={styles.windowsText}>Movies</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333945',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  windows: {
    padding: 10,
  },
  windowsText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
});
