import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        shadowColor: '#9999A1',
        shadowOffset:{
            height: 5,
            width: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1
    }
});