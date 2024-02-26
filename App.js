import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

import { myFonts } from './src/global/fonts';

export default function App() {

  init()
  .then(
    ()=>console.log("Base de datos inicializado")
  )
  .catch(
    (error)=>console.log("Fallo al inicializar la base de datos: ", error)
  );

  const [fontLoaded] = useFonts(myFonts)

  if (!fontLoaded) return <ActivityIndicator />

  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


