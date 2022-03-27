import React, { useRef } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
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
  const safeData = data ?? [];
  const safeScrollX = scrollX ?? useRef(new Animated.Value(0)).current;
  const safeCurrentIndex = currentIndex ?? 0;
  return (
    <View style={[styles.container, { width: 0.9 * width }, style]}>
      <SkipButton />
      <DotIndicator
        data={safeData}
        scrollX={safeScrollX}
        currentIndex={safeCurrentIndex}
        style={styles.dotIndicator}
      />
      <NextItemButton
        data={safeData}
        percentage={Math.round((safeCurrentIndex + 1) * (100 / safeData.length))}
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
