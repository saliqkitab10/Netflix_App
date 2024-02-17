import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const openWebsite = (websiteName: string) => {
    Linking.openURL(websiteName);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.netflixImage}
        source={require('../components/assets/netflixIcon.png')}></Image>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#b2bec3"
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="#b2bec3"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.signinButton}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.message}>
        <Text style={styles.textMessage}>Dont't have an account? </Text>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.netflix.com/signup')}>
          <Text style={[styles.textMessage, {color: 'red'}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e0e1a',
  },
  netflixImage: {
    marginBottom: 12,
  },
  inputContainer: {},
  input: {
    color: 'white',
    borderWidth: 1,
    height: 40,
    width: 250,
    borderColor: 'red',
    marginBottom: 12,
    borderRadius: 12,
    textAlign: 'left',
    paddingLeft: 8,
  },
  signinButton: {
    height: 40,
    width: 220,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
  },
  message: {
    flexDirection: 'row',
    // marginBottom: 60,
  },
  textMessage: {
    color: 'white',
    fontSize: 13,
  },
});
