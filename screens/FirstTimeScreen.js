import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '../src/theme'
import cooking from '../src/cooking'
import TextField from '../components/inputField'


export default function HomeScreen(props) {
  console.log(props);
  const { navigation } = props
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <InputField
          value={phonenumber}
          onChange={text => this.setState({ name: text })}
          label="Name"
          placeholder="Enter Your name"
          style={styles.inputField}
          autoCapitalize="none"
        />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'Cooking',
  headerStyle: {
    backgroundColor: 'skyblue',
    height: 65
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: theme.spacing.unit,
  },
});
