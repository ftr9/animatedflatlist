import { View, Text, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const FoodCard = ({ sharedValue, snapOffset, imageUrl }) => {
  const screenWidth = Dimensions.get('screen').width * (80 / 100);
  const screenHeight = Dimensions.get('screen').height * (50 / 100);

  const animatedSize = useAnimatedStyle(() => {
    const scale = interpolate(
      sharedValue.value,
      snapOffset,
      snapOffset.length === 2 ? [1, 0.7] : [0.7, 1, 0.7],
      {
        extrapolateLeft: Extrapolation.CLAMP,
      }
    );
    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: screenWidth,
          height: screenHeight,
          backgroundColor: 'orange',
          marginLeft: 10,
          borderRadius: 20,
          overflow: 'hidden',
        },
        animatedSize,
      ]}
    >
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
    </Animated.View>
  );
};

export default FoodCard;
