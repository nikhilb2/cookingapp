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


export default function ItemsScreen(props) {
  const { params } = props.navigation.state
  const { navigation } = props
  console.log(params);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          {params.items.map((item, i)=> (
            <TouchableOpacity style={styles.holder} onPress={() => navigation.navigate("Item", {item:item})} key={item.Name+i}>
              <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
              <Text style={styles.text}>{item.Name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

ItemsScreen.navigationOptions = {
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
    marginLeft: theme.spacing.unit * 2
  }
});
