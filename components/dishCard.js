import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { titleCase } from '../utils/capitalize'

const CategoryItem = props => {
  const { dish } = props
  return (
    <View style={styles.root}>
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
  image: {
    width: 50,
    height: 50,
    margin: theme.spacing.unit * 2
  },
  text: {
    fontSize: theme.spacing.unit * 2.5,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: theme.spacing.unit * 2
  }
})

export default CategoryItem
