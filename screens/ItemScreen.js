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
        <View style={styles.titleholder}>
          <Image style={styles.imagesmall} source={require('../assets/images/food.jpeg')} />
          <Text style={styles.title}>{params.item.Name}</Text>
        </View>
          {params.item.Details.map((detail, i)=> (
            <View style={styles.holder} key={detail.title+""+i}>
                <View>
                  <Text style={styles.captionText}>{detail.Title}</Text>
                  <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
                  <Text>{detail.Description}</Text>
                </View>
              {params.item.RelatedImages.map((image,i) => {
                <View style={styles.holder} key={image.Description+""+i}>
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
  titleholder: {
    margin: theme.spacing.unit,
    alignItems: 'center'
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: theme.spacing.unit,
    alignItems: 'center'
  },
  imagesmall:{
    width: 80,
    height: 80,
    borderRadius: theme.spacing.unit,
    alignItems: 'center'
  },
  title: {
    ...theme.typography.h2
  },
  captionText: {
    ...theme.typography.h3,
    fontWeight: 'bold'
  }
});
