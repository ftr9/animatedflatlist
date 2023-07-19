import { StatusBar } from 'expo-status-bar';
import Header from './components/Layout/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeSectionOne from './components/section/HomeSectionOne';
import FoodSlider from './components/Layout/FoodSlider';

const SafeArea = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#f1f3f5',
        }}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <SafeArea>
      <Header />
      <HomeSectionOne />
      <FoodSlider />
      <StatusBar style={'dark'} backgroundColor="#f1f3f5" />
    </SafeArea>
  );
}
