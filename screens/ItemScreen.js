
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal
} from 'react-native';

import theme from '../src/theme'
import Button from '../components/button'

const { width } = Dimensions.get('window')

class ItemScreen extends Component {

  state = {
    showModal: false
  }

  render() {
    const { params } = this.props.navigation.state
    const { navigation } = this.props
    console.log('params');
    console.log(params);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleholder}>
            {params.item.Image.length > 0 ? <Image resizeMode='stretch' style={styles.imagesmall} source={{uri: params.item.Image}} />: null }
            <Text style={styles.title}>{params.item.Name}</Text>
          </View>
            {params.item.Details.map((detail, i)=> (
              <View style={styles.holder} key={detail.title+""+i}>
                  <View>
                    <Text style={styles.captionText}>{detail.Title}</Text>
                    {detail.Image.length > 0 ? <TouchableOpacity onPress={()=> this.setState({showModal: true, source:detail.Image})}><Image resizeMode='stretch' style={styles.image} source={{uri: detail.Image}} /><Text style={styles.imageTap}>Tap Image to see full size</Text></TouchableOpacity>: null}
                    <Text>{detail.Description}</Text>
                  </View>
              </View>
            ))}
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}
        >
        <View style={styles.modalHolder}>
          <Image resizeMode='stretch' style={styles.modalImage} source={{uri: this.state.source}} />
            <Button caption="Close" style={styles.button} onClick={()=>this.setState({showModal: false})} />
          </View>
        </Modal>
        <Button style={styles.button} caption='Other Benefits' onClick={()=> navigation.navigate('OtherBenefits', {otherBenefits: params.item.RelatedImages})} />
      </View>
    );
  }

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
  },
  modalImage: {
    width: width,
    height: 300
  },
  modalHolder: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  button: {

  },
  imageTap: {
    marginRight: 'auto',
    marginLeft: 'auto',
    margin: theme.spacing.unit/2,
    fontWeight: 'bold'
  }
});

export default ItemScreen
