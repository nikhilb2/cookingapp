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
import Category from '../components/category'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {cooking.Categories.map((category,i)=>(
          <TouchableOpacity key={category.Name+i}>
            <Category category={category} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'Cooking',
  headerStyle: {
    backgroundColor: '#f06297',
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
