import { VStack, Text, Image, Center, TextArea, FlatList, HStack } from 'native-base';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle, Animated } from 'react-native';
const Pagination: React.FC<{
  style?: ViewStyle;
  data: { id: string; title: string }[];
  scrollX: Animated.Value;
}> = ({ style, data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <HStack height={64}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
        );
      })}
    </HStack>
  );
};
const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 8,
  },
});
export default Pagination;
