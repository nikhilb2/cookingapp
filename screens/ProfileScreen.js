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
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import {  currentSession } from '../src/UserSession'
import { titleCase } from '../utils/capitalize'
class  ProfileScreen extends Component {

  state = {

  }


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.greetings}>
          <MaterialCommunityIcons style={styles.icon} name='human-greeting' size={70} color={theme.palette.primary.main} />
          <Text style={styles.text}>Greetings! </Text>
            <Text style={styles.text}>
              {titleCase(currentSession.user)}
            </Text>
            </View>
            <View style={styles.greetings}>
            <AntDesign style={styles.icon} name='heart' color='red' size={70} />
            <Text style={styles.favorites}>
              Total favorites: {currentSession.favoriteIds.length}
            </Text>
            </View>
        </ScrollView>
      </View>
    );
  }

}

ProfileScreen.navigationOptions = {
  headerTitle: 'My Favorites',
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
    alignItems: 'center'
  },
  holder: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing.unit/2
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: theme.spacing.unit
  },
  text: {
    ...theme.typography.h2,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  favorites: {
    ...theme.typography.h2,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  greetings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    margin: theme.spacing.unit
  }
});

export default ProfileScreen
