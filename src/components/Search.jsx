import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { EvilIcons, Entypo } from '@expo/vector-icons';


const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')

  return (
    <View style={styles.SearchContainer}>
      <TextInput 
        style={styles.searchInput}
        onChangeText={setSearchInput}
        placeholder='Buscar producto...'
      />
      <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
        <EvilIcons name='search' size={24} color={'gray'} />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => { onSearchHandlerEvent("") }}>
        <Entypo name='cross' size={24} color={'gray'}/>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  SearchContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  searchInput:{
    width: '80%',
  }
})