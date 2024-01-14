import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//import cart_data from "../data/cart_data.json"
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import { clearCart } from '../features/cartSlice'
import { currentFont } from '../global/fonts';

const CartScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const cartItems = useSelector(state=>state.cartReducer.items)
    const total = useSelector(state=>state.cartReducer.total)
    const LoggedUser = useSelector(state=>state.authReducer.user)

    const [triggerPost, result] =  usePostOrderMutation()

    const confirmCart = ()=>{
      triggerPost({total,cartItems,user:LoggedUser})
            
      dispatch(clearCart([]))
      navigation.navigate("Categories")
    }

    const renderCartItem = ({item}) => (
        <CartItem item={item} />
    )

    return (
        <View style={styles.cartContainer}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total: USD {total}</Text>
                <TouchableOpacity style={cartItems?.length > 0 ? styles.confirmButton : styles.disabledButton } onPress={confirmCart} disabled={cartItems?.length > 0 ? false : true }>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer: {
      flex: 1,
    },
    cartConfirm: {
      marginBottom: 130,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    totalPrice: {
      fontSize: 16,
      fontFamily: currentFont.bold
    },
    confirmButton:{
      backgroundColor: colors.secondary,
      padding:10,
      borderRadius:10,
    },
    disabledButton:{
      backgroundColor: colors.disabled,
      padding:10,
      borderRadius:10,
    },
    textConfirm:{
      fontFamily: currentFont.bold,
      fontSize:16,
      color: '#fff'
    }  
  })