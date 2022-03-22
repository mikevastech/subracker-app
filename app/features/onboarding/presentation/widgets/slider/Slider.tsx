import React, { useRef, useState } from 'react';
import { Text } from 'native-base';
import { Animated, useWindowDimensions, View, ViewStyle, StyleSheet } from 'react-native';
import SliderList from './SliderList';
import Pagination from './Pagination';
import source from '../../../data/sources/local/data.json';
import NextItemButton from './NextItemButtom';
import data from '../../../data/sources/local/data.json';
/**
 * @author Mike Vas <mikevastech@gmail.com>
 * All attributions to DesignIntoCode <https://www.patreon.com/posts/47049894>
 * This Slider Widget is wastly inspired by series of videos {@link https://www.youtube.com/watch?v=Efy48Uoa4RM&list=PLxpjrPlvibSvJ0PPHG8FHSKQYIOOiaq_N&index=1 DesignIntoCode|Onboarding tutorial for React Native - Fluid Indicator #2}.
 * Checkout his channel {@linkhttps://www.youtube.com/channel/UCPZlE8KsMkumnjEMOcJDxuQ DesignIntoCode| YT Channel} and donate to support: {@link https://www.patreon.com/designintocode DesignIntoCode| Patreon}
 */
interface ISliderListProps {
  style?: ViewStyle;
  scrollX?: Animated.Value;
  data?: { id: string; title: string }[];
  currentIndex?: number;
  setCurrentIndex?: (newIndex: number) => void;
}
interface ISliderProps {
  style?: ViewStyle;
  children: React.ReactElement<ISliderListProps>[] | React.ReactElement<ISliderListProps>;
}

const Slider: React.FC<{ style?: ViewStyle }> = ({ style, children }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { data, scrollX, currentIndex, setCurrentIndex });
    }
    return child;
  });
  return (
    <View style={[styles.container, { width }, style]}>
      {childrenWithProps}
      {/* <SliderList
        data={source}
        scrollX={scrollX}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Pagination data={source} scrollX={scrollX} />
        <NextItemButton
          data={source}
          percentage={Math.round((currentIndex + 1) * (100 / source.length))}
        />
      </View> */}
    </View>
  );
};
export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
