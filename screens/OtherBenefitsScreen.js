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
  Dimensions
} from 'react-native';

import theme from '../src/theme'



export default function OtherBenefits(props) {
  const { params } = props.navigation.state
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <Text>Coming Soon</Text>
        </View>
      </ScrollView>
    </View>
  );
}

OtherBenefits.navigationOptions = {
  headerTitle: 'Details',
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
  holder: {
    margin: theme.spacing.unit,
  },

});
