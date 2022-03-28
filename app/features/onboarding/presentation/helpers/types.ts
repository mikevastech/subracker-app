import { string } from 'fp-ts';
import { Animated, ImageSourcePropType, ViewStyle } from 'react-native';

export interface ISliderDataSource {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export interface ISliderListProps {
  style?: ViewStyle;
  scrollX?: Animated.Value;
  data?: ISliderDataSource[];
  currentIndex?: number;
  setCurrentIndex?: (newIndex: number) => void;
}
