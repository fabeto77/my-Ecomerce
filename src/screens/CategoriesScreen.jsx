import { Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import categories_data from '../data/categories_data.json';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = ({onSelectCategoryEvent}) => {


    const renderCategoryItem = ({item}) => (
        <CategoryItem
            category={item}
            onSelectCategoryEvent={onSelectCategoryEvent}
        />
    )

    return (
    <>
        <Header title="Categorías" />
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item => item}
        />
    </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

});