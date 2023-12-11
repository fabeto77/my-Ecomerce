import { ActivityIndicator, StatusBar } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import {useFonts} from 'expo-font';


import ProductByCategoryScreen from './src/screens/ProductByCategoryScreen';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected ] = useState('');

  console.log("Categoria seleccionada: ", categorySelected);
  
  const [fontLoaded] = useFonts(
    {
      'DancingScript-Regular': require('./assets/fonts/PermanentMarker-Regular.ttf'),
      'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf')
    }
  );

  if (!fontLoaded){
    return <ActivityIndicator/>
  }

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  } 

  return (
    <>
      <StatusBar style="auto" />
      {
        categorySelected ? <ProductByCategoryScreen category={categorySelected}/> : <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      }
    </>
  );
}