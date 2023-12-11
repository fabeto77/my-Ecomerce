import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import products_data from '../data/products_data.json';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import Search from '../components/Search';

const ProductByCategoryScreen = ({category}) => {

  const [productsByCategory, setProductsByCategory] = useState([]);
  const [search, setSearch] = useState('');

  useEffect (() => {
    
    const productsFiltedByCategory = products_data.filter(product => product.category === category);
    const productsFiltredBySearchBox = productsFiltedByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    setProductsByCategory(productsFiltredBySearchBox);

  }, [category, search])

  const renderProductItem =  ({item}) => (
    <ProductItem product={item}/>
  )

  const onSearch = (searchText) => {
    setSearch(searchText)
  }

  return (
    <>
      <Header title="Productos"/>
      <Search onSearchHandlerEvent = {onSearch}/>
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default ProductByCategoryScreen