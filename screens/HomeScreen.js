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
import { SafeAreaView } from "react-navigation";
import theme from '../src/theme'
import cooking from '../src/cooking'
import Category from '../components/category'
import { currentSession } from '../src/UserSession'

export default function HomeScreen(props) {
  const { navigation } = props
  return (
    <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {cooking.Categories.map((category,i)=>(
          <TouchableOpacity onPress={()=> navigation.navigate("Items", {items:category.Items})} key={category.Name+i}>
            <Category category={category} />
          </TouchableOpacity>
        ))}
        <View style={styles.aboutApp}>
          <Text style={styles.aboutTitle}>About App</Text>
          <Text style={styles.aboutText}>{cooking.AboutApp.Description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'Food Nutrition',
  headerStyle: {
    backgroundColor: 'skyblue',
    height: 65,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  contentContainer: {
    paddingTop: theme.spacing.unit,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  aboutApp: {
    margin: theme.spacing.unit *2,
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    borderRadius: theme.spacing.unit *2,
    padding: theme.spacing.unit
  },
  aboutTitle: {
    ...theme.typography.h2
  },
  aboutText: {
    ...theme.typography.caption,
    textAlign: 'justify'
  }
});
