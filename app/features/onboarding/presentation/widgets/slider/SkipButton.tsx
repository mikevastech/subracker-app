import { VStack, Text, Image, Center, TextArea, FlatList, HStack } from 'native-base';
import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { ISliderDataSource } from '../../helpers/types';
const SkipButton: React.FC<{
  style?: ViewStyle;
}> = ({ style }) => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={{ color: '#FFD009' }}> SKIP </Text>
      </TouchableOpacity>
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
export default SkipButton;
