import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

export default HomeSectionOne;
