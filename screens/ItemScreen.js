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


const { width } = Dimensions.get('window')

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
          {params.item.Image.length > 0 ? <Image resizeMode='stretch' style={styles.imagesmall} source={{uri: params.item.Image}} /> : null }
          <Text style={styles.title}>{params.item.Name}</Text>
        </View>
          {params.item.Details.map((detail, i)=> (
            <View style={styles.holder} key={detail.title+""+i}>
                <View>
                  <Text style={styles.captionText}>{detail.Title}</Text>
                  {detail.Image.length > 0 ? <Image resizeMode='stretch' style={styles.image} source={{uri: detail.Image}} /> : null}
                  <Text>{detail.Description}</Text>
                </View>
              {params.item.RelatedImages.map((image,i) => {
                <View style={styles.holder} key={image.Description+""+i}>
                {image.Image.length>0 ? <Image resizeMode='stretch' style={styles.image} source={{uri: image.Image}} /> : null}
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
  titleholder: {
    margin: theme.spacing.unit,
    alignItems: 'center'
  },
  image:{
    width: width * .9,
    height: 150,
    borderRadius: theme.spacing.unit,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
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
