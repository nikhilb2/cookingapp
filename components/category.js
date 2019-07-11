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
    marginLeft: theme.spacing.unit
  },
  text: {
    ...theme.typography.h3,
  }
})

export default CategoryItem
