import { VStack, Text, Image, Center, TextArea, FlatList, HStack } from 'native-base';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle, Animated } from 'react-native';
import { ISliderDataSource } from '../../helpers/types';
import DotIndicator from './DotIndicator';
import NextItemButton from './NextItemButtom';
import SkipButton from './SkipButton';
const Pagination: React.FC<{
  style?: ViewStyle;
  data?: ISliderDataSource[];
  currentIndex?: number;
  scrollX?: Animated.Value;
}> = ({ style, data, currentIndex, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: 0.9 * width }]}>
      <SkipButton />
      <DotIndicator
        data={data!}
        scrollX={scrollX!}
        currentIndex={currentIndex!}
        style={styles.dotIndicator}
      />
      <NextItemButton
        data={data!}
        percentage={Math.round((currentIndex! + 1) * (100 / data!.length))}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotIndicator: {
    marginTop: 52,
  },
});
export default Pagination;
