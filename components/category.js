import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { Entypo } from '@expo/vector-icons'
import { titleCase } from '../utils/capitalize'

const CategoryItem = props => {
  const { category } = props
  return (
    <View style={styles.root}>
        <Image style={styles.image} source={require('../assets/images/food.jpeg')} />
        <Text style={styles.text}>{titleCase(category.Name)}</Text>
      <Entypo
        name="chevron-down"
        size={35}
        color={theme.palette.primary.main}
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginRight: theme.spacing.unit * 2
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing.unit
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  text: {
    ...theme.typography.h2,
    position: 'absolute',
    left: theme.spacing.unit * 15,
    top: '30%'
  }
})

export default CategoryItem
