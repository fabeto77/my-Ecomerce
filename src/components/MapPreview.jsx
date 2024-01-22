import { Image, StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import { maps_api_key } from '../apis/googleCloud'

const MapPreview = ({location}) => {
  return (
    <View style={styles.MapPreview}>
      <Image
        style={styles.MapImage}
        source= {{uri:`https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=300x300&mapType=roadmap&markers=color:red%7Clabel=I%7C${location.latitude},${location.longitude}&key=${maps_api_key}`}}
      />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    MapPreview:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    MapImage:{
      width: Dimensions.get('window').width,
      height: 300
    }
})