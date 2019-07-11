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
} from 'react-native';

import theme from '../src/theme'
import cooking from '../src/cooking'
import InputField from '../components/inputfield'
import { restoreSession } from '../src/UserSession'

class FirstTimeScreen extends Component {

  state = {
    name: null
  }


  componentDidMount() {
    restoreSession()
  }

  render() {
    const { navigation } = this.props
    const { name } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <InputField
            value={name}
            onChange={text => this.setState({ name: text })}
            label="Name"
            placeholder="Enter Your name"
            style={styles.inputField}
            autoCapitalize="none"
          />
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
    marginTop: 'auto',
    marginBottom: 'auto',
    margin: theme.spacing.unit
  },
});

export default FirstTimeScreen
