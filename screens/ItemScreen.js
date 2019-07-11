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


export default function ItemScreen(props) {
  const { params } = props.navigation.state
  console.log('params');
  console.log(params);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
          <Text>{params.item.Name}</Text>
        </View>
          {params.item.Details.map((detail, i)=> (
            <View key={detail.title+""+i}>
                <View>
                  <Text>{detail.Title}</Text>
                  <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
                  <Text>{detail.Description}</Text>
                </View>
              {params.item.RelatedImages.map((image,i) => {
                <View key={image.Description+""+i}>
                  <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
                  <Text>{image.Description}</Text>
                </View>
              })}
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

ItemScreen.navigationOptions = {
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
  image: {
    height: 80,
    width: 80
  }
});
