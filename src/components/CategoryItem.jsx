import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/theme'

const CategoryItem = ({category, onSelectCategoryEvent}) => {
  return (
    <TouchableOpacity onPress={()=> onSelectCategoryEvent(category)}>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 5,
        marginVertical: 4,
        paddingVertical: 30,
        paddingLeft: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    text:{
        textTransform: 'capitalize',
        fontSize: 20,
        fontFamily: 'DancingScript-Regular',
    }
});