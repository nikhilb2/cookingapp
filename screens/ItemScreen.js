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


export default function HomeScreen() {
  const { params } = this.props.navigation.state
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          {params.items.map((item, i)=> (
            <View>
              <Image source={require('../assets/images/food.jpeg')} />
              <Text>{params.items.Name}</Text>
              {params.Details.map((detail, i) => (
                <View>
                  <Text>{detail.Title}</Text>
                  <Image source={require('../assets/images/food.jpeg')} />
                  <Text>{detail.Description}</Text>
                </View>
              ))}
              {params.RelatedImages.map((image,i) => {
                <View>
                  <Image source={require('../assets/images/food.jpeg')} />
                  <Text>{image.Description}</Text>
                </View>
              })}
            </View>
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
