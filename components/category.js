import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import theme from '../src/theme'
import { titleCase } from '../utils/capitalize'

const { width } = Dimensions.get('window')

const CategoryItem = props => {
  const { category } = props
  return (
    <View style={styles.root}>
        <Image resizeMode='stretch' style={styles.image} source={{uri:category.Image}} />
        <View style={styles.buttonText} >
        <Text style={styles.text} numberOfLines={2}
          ellipsizeMode="tail">{titleCase(category.Name)}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {

  },
  container: {
    display: 'flex',
    marginBottom: theme.spacing.unit
  },
  image:{
    width: width * .9,
    height: 150,
    borderRadius: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    ...theme.typography.h3,
    width: '80%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: theme.spacing.unit,
    color: theme.palette.primary.contrastText,

  },
  buttonText: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing.unit,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit
  }
})

export default CategoryItem
