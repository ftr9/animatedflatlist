import { Text, View, FlatList, Dimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import FoodCard from '../Cards/FoodCard';

const SAMPLE_DATA = [1, 2, 3, 4, 5, 6];
const LIST_DATAS = [
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

const FoodSlider = () => {
  const sharedVal = useSharedValue(0);

  const onScrollHandle = useAnimatedScrollHandler(e => {
    sharedVal.value = e.contentOffset.x;
  });

  const calculateSnapOffsets = () => {
    const cardWidth = (80 / 100) * Dimensions.get('screen').width + 10;
    const values = SAMPLE_DATA.map(el => {
      if (el === 1) {
        return [0, cardWidth];
      }

      return [cardWidth * (el - 2), cardWidth * (el - 1), cardWidth * el];
    });

    return values;
  };
  const calculatedSnapOffsets = calculateSnapOffsets();

  return (
    <Animated.FlatList
      style={{
        marginTop: 40,
      }}
      data={SAMPLE_DATA}
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
            imageUrl={LIST_DATAS[item - 1].image}
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

export default FoodSlider;
