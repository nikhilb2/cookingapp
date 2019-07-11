import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import theme from '../src/theme'
import cooking from '../src/cooking'
import InputField from '../components/inputfield'
import { restoreSession, currentSession, login } from '../src/UserSession'
import Button from '../components/button'
class FirstTimeScreen extends Component {

  state = {
    name: null,
    user: null
  }


  async componentDidMount() {
    const { navigation } = this.props
    await restoreSession()
    console.log(currentSession);
    if (currentSession) {
      navigation.navigate("Main")
    }

  }

  render() {
    const { navigation } = this.props
    const { name } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.first}>First time app launch detected</Text>
            <Text style={styles.first}>Please enter your name to continue</Text>
          </View>
          <View style={styles.enterName}>
          <InputField
            value={name}
            onChange={text => this.setState({ name: text })}
            label="Name"
            placeholder="Enter Your name"
            style={styles.inputField}
            autoCapitalize="none"
          />
          <Button
            caption='Continue'
            style={styles.button}
            onClick={() => {
              if (name) {
                login({
                  user:name,
                  favoriteIds: [],
                  favoriteData: []
                })
              } else {
                Alert.alert("Error", "Please enter your name")
              }
            }}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  inputField: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  welcome: {
    margin: theme.spacing.unit,
    ...theme.typography.h2,
    textAlign: 'center'
  },
  first: {
    ...theme.typography.caption,
        textAlign: 'center'
  },
  enterName: {
    margin: theme.spacing.unit * 3,
    borderColor: 'skyblue',
    borderWidth: theme.spacing.unit/2,
    padding: theme.spacing.unit,
    borderRadius: theme.spacing.unit * 2

  }
});

export default FirstTimeScreen
