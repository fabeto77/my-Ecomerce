import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  return (
   <TouchableOpacity style={styles.containerProductItem}>
    <Text style={styles.productTitle}>{product.title}</Text>
    <Image
        style={styles.productImage}
        resizeMode='cover'
        source={{ uri:product.thumbnail }}
    />

   </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        margin:10,
    },
    productTitle:{
        fontFamily: 'DancingScript-Regular'
    },
    productImage:{
        width:60,
        height:60,
    }
})