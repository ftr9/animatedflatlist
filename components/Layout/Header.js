import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          height: 35,
          width: 35,
          borderRadius: 100,
          backgroundColor: 'red',
        }}
        resizeMode="cover"
        source={{
          uri: 'https://images.pexels.com/photos/7230242/pexels-photo-7230242.jpeg?auto=compress&cs=tinysrgb&w=400',
        }}
      ></Image>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
        }}
      >
        DISCOVER
      </Text>
      <Ionicons name="search" size={24} color={'black'} />
    </View>
  );
};

export default Header;
