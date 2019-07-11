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

export default function OtherBenefits(props) {
  const { params } = props.navigation.state
  console.log('OtherBenefits');
  console.log(params.otherBenefits[0]);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View>
        {params.otherBenefits.map((benefit,i) => (
          <View style={styles.holder} key={benefit.Description+""+i}>
          <Text style={styles.title}>{benefit.Title}</Text>
          {benefit.Image.length>0
            ? <Image resizeMode='stretch' style={styles.image} source={{uri: benefit.Image}} />
            : null}
            <Text>{benefit.Description}</Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  );
}

OtherBenefits.navigationOptions = {
  headerTitle: 'Other Benefits',
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
  image:{
    width: width * .9,
    height: 150,
    borderRadius: theme.spacing.unit,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title : {
    ...theme.typography.h3,
    margin: theme.spacing.unit,
    fontWeight: 'bold'
  }

});
