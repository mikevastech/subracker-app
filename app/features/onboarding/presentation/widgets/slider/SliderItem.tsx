import { VStack, Text, Image, Center, TextArea, FlatList } from 'native-base';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native';
const SliderItem: React.FC<{
  style?: ViewStyle;
  item: { id: string; title: string };
}> = ({ style, item }) => {
  const { width } = useWindowDimensions();
  return (
    // <View style={[styles.container, { width }]}>
    //   <Text width={'100%'}> {item.title} </Text>
    // </View>
    <Center width={width}>
      <Text width={'100%'} color="#FFD009">
        {' '}
        {item.title}{' '}
      </Text>
    </Center>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SliderItem;
