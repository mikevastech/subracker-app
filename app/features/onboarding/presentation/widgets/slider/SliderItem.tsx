import { VStack, Text, Image, Center, TextArea, FlatList } from 'native-base';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native';
import { ISliderDataSource } from '../../helpers/types';
const SliderItem: React.FC<{
  style?: ViewStyle;
  item: ISliderDataSource;
}> = ({ style, item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'cover',
        }}
      />
      <Text> {item.title} </Text>
      <Text> {item.description} </Text>
    </View>
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
