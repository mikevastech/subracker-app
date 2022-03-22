import React, { useRef, useState } from 'react';
import { Text } from 'native-base';
import {
  Animated,
  FlatList,
  useWindowDimensions,
  View,
  ViewStyle,
  ViewToken,
  StyleSheet,
} from 'react-native';

import SliderItem from './SliderItem';

/**
 * @author Mike Vas <mikevastech@gmail.com>
 */
interface ISliderListProps {
  style?: ViewStyle;
  scrollX?: Animated.Value;
  data?: { id: string; title: string }[];
  currentIndex?: number;
  setCurrentIndex?: (newIndex: number) => void;
}
const SliderList: React.FC<ISliderListProps> = ({
  style,
  scrollX,
  data,
  currentIndex,
  setCurrentIndex,
}) => {
  const { width } = useWindowDimensions();

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex!(viewableItems[0].index ?? 0);
  }).current;

  const viewConfig = useRef({ viewAreCoveragePercentTrehshold: 50 }).current;
  const slidesRef = useRef(null);
  const onScrollRef = () => {
    return Animated.event(
      [
        {
          nativeEvent: { contentOffset: { x: scrollX! } },
        },
      ],
      { useNativeDriver: false },
    );
  };
  return (
    <View style={[styles.container, { width }, style]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={onScrollRef()}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        ref={slidesRef}
        style={{ flex: 1 }}
      />
    </View>
  );
};
export default SliderList;
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    flexDirection: 'column',
  },
});
