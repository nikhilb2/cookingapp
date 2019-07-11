import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { titleCase } from '../utils/capitalize'

const CategoryItem = props => {
  const { category } = props
  return (
    <View style={styles.root}>
        <Image resizeMode='stretch' style={styles.image} source={{uri:category.Image}} />
        <Text style={styles.text} numberOfLines={2}
          ellipsizeMode="tail">{titleCase(category.Name)}</Text>
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
    width: 150,
    height: 150,
    borderRadius: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    ...theme.typography.h3,
    width: '50%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: theme.spacing.unit
  }
})

export default CategoryItem
