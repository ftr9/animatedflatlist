import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Layout/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import FoodCard from './components/Cards/FoodCard';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

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

const HomeSectionOne = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 32,
            letterSpacing: 15,
            fontWeight: '500',
          }}
        >
          FEAT .
        </Text>
        <Text
          style={{
            fontSize: 32,
            letterSpacing: 15,
            fontWeight: '500',
          }}
        >
          . URED
        </Text>
      </View>
      <Ionicons name="document" size={28} color={'black'} />
    </View>
  );
};

const FoodSlider = () => {
  const sharedVal = useSharedValue(0);

  const onScrollHandle = useAnimatedScrollHandler(e => {
    sharedVal.value = e.contentOffset.x;
  });

  const data = [1, 2, 3, 4, 5, 6];

  const calculateSnapOffsets = () => {
    const cardWidth = (80 / 100) * Dimensions.get('screen').width + 10;
    const values = data.map(el => {
      if (el === 1) {
        return [0, cardWidth];
      }

      return [cardWidth * (el - 2), cardWidth * (el - 1), cardWidth * el];
    });

    return values;
  };
  const calculatedSnapOffsets = calculateSnapOffsets();
  const ListDatas = [
    {
      image:
        'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      image:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      image:
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      image:
        'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      image:
        'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      image:
        'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <Animated.FlatList
      style={{
        marginTop: 40,
      }}
      data={data}
      horizontal
      onScroll={onScrollHandle}
      snapToOffsets={calculatedSnapOffsets.flat(1)}
      decelerationRate={0.05}
      snapToAlignment={'start'}
      renderItem={({ item }) => {
        return (
          <FoodCard
            sharedValue={sharedVal}
            snapOffset={calculatedSnapOffsets[item - 1]}
            imageUrl={ListDatas[item - 1].image}
          />
        );
      }}
      ListFooterComponent={() => {
        return (
          <View
            style={{ width: Dimensions.get('screen').width * (18 / 100) }}
          ></View>
        );
      }}
      keyExtractor={(_, index) => index}
    ></Animated.FlatList>
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
