import { FlatList, ScrollView, StyleSheet } from 'react-native'
import OrderItem from '../components/OrderItem'
import orders_data from '../data/orders_data.json'
import { useGetOrdersQuery } from '../services/orderServices'
import { useSelector } from 'react-redux'
import { RefreshControl } from 'react-native-web'



const OrdersScreen = () => {
  
  //@TODO El filtrado debe hacerse en el query al back no acá 
  const {data, isLoading, error} = useGetOrdersQuery();
  
  let purgedData = undefined;

  if (!!data){
    purgedData = Object.entries(data).map(([id, item]) => ({
      id,
      ...item
    }));
  }

  //Obtenemos el usuario actual
  const user = useSelector(state=>state.authReducer.user)

  let UserData =  purgedData; 
  //Filtramos sólo las ordenes del usuario actual
  if (!!purgedData){
    UserData = purgedData.filter(item => item.user == user);
  }

  const renderOrderItem = ({item}) => {
    let total = 0; 
    if (item?.cartItems?.length > 0){
      total = item.cartItems.reduce((accumulator, currentItem) => (
        accumulator+= currentItem.price*currentItem.quantity
      ),0)
    }
    return(
      <OrderItem order={item} total={total} />
    )
  }

  return (
    <FlatList
      data={UserData}
      renderItem={renderOrderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default OrdersScreen