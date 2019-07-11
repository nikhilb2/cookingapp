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
import { AntDesign } from '@expo/vector-icons'
import { logout, currentSession, updateFav } from '../src/UserSession'

const addTofavourites = ( item, id) => {
  currentSession.favoriteIds.push(id)
  currentSession.favoriteData.push(item)
  updateFav(currentSession)
  console.log(currentSession);
}

const findItem = (id) => {
  let found = false
  currentSession.favoriteIds.find(currentId => {
    if (id===currentId) {
      found = true
    }
  })
  return found
}


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
              <TouchableOpacity  style={styles.heart}  onPress={()=>addTofavourites(item, item.Name)}>
              <AntDesign name={findItem(item.Name) ? 'heart' : 'hearto' } color='red' size={30}/>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

ItemsScreen.navigationOptions = {
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
  },
  heart: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: '33%'
  }
});
