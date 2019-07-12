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
import { AntDesign } from '@expo/vector-icons'
import { logout, currentSession, updateFav } from '../src/UserSession'
import ItemCard from '../components/ItemCard'
import { NavigationEvents } from 'react-navigation'
import { Divider } from 'react-native-elements';

class  FavoriteScreen extends Component {

  state = {

  }

   addTofavourites( item, id) {
    currentSession.favoriteIds.push(id)
    currentSession.favoriteData.push(item)
    updateFav(currentSession)
    console.log(currentSession);
    this.setState({hack:true})
  }

   removeFromfavorites(id) {
    const indexOfFav = currentSession.favoriteIds.findIndex(favId => {
      if (favId===id) {
        return favId
      }
    })
    currentSession.favoriteIds.splice(indexOfFav,1)
    currentSession.favoriteData.splice(indexOfFav,1)
    updateFav(currentSession)
    this.setState({hack:true})
  }

  findItem(id) {
    let found = false
    currentSession.favoriteIds.find(currentId => {
      if (id===currentId) {
        found = true
      }
    })
    return found
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={() => this.setState({hack:true})} />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            {currentSession.favoriteData.map((item, i)=> (
              <View key={item.Name+""+i}>
                <ItemCard navigateTo={(screen, params) =>navigation.navigate(screen, params)} favorite={this.findItem(item.Name)} addTofavourites={(item, id) => this.addTofavourites(item, id)} item={item} removeFromfavorites={(id) => this.removeFromfavorites(id)}/>
                <Divider style={{ backgroundColor: 'skyblue' , height: 1, marginLeft:theme.spacing.unit, marginRight:theme.spacing.unit}} />
              </View>
            ))}
            {currentSession.favoriteData.length< 1 ? <Text style={styles.text}>You didnt added anything in favorites</Text>: null}
        </ScrollView>
      </View>
    );
  }

}

FavoriteScreen.navigationOptions = {
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

export default FavoriteScreen
