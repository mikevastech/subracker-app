import { VStack, Text, Image, Center, TextArea, FlatList, HStack } from 'native-base';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle, Animated } from 'react-native';
import { ISliderDataSource } from '../../helpers/types';
const DotIndicator: React.FC<{
  style?: ViewStyle;
  data: ISliderDataSource[];
  scrollX: Animated.Value;
  currentIndex: number;
}> = ({ style, data, scrollX, currentIndex }) => {
  const WHITE = '#FFFFFF';
  const YELLOW = '#FFD301';
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, style]}>
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
          <Animated.View
            key={i.toString()}
            style={[
              styles.dot,
              { width: dotWidth, opacity, backgroundColor: i === currentIndex ? YELLOW : WHITE },
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 8,
  },
});
export default DotIndicator;
