import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

import { myFonts } from './src/global/fonts';

export default function App() {

  const [fontLoaded] = useFonts(myFonts)

  if (!fontLoaded) return <ActivityIndicator />

  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


