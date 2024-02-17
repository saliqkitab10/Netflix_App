import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type DefaultRibbonProps = {
  heading: string;
};
const DefaultRibbon = ({heading}: DefaultRibbonProps) => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>{heading}</Text>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.ribbonContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.netflix.com/in/title/80117470')
              }
              style={styles.tile}>
              <Image
                style={styles.tileImage}
                source={require('./assets/PopularSeries/one.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.netflix.com/in/title/80018294')
              }
              style={styles.tile}>
              <Image
                style={styles.tileImage}
                source={require('./assets/PopularSeries/two.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.netflix.com/in/title/80223989')
              }
              style={styles.tile}>
              <Image
                style={styles.tileImage}
                source={require('./assets/PopularSeries/three.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.netflix.com/in/title/80057918')
              }
              style={styles.tile}>
              <Image
                style={styles.tileImage}
                source={require('./assets/PopularSeries/four.png')}></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DefaultRibbon;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    color: 'hsl(0, 0%, 100%)',
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
  },
  tileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  ribbonContainer: {
    flexDirection: 'row',
  },
  tile: {
    height: 210,
    width: 150,
    // backgroundColor: 'blue',
    margin: 10,
  },
});
