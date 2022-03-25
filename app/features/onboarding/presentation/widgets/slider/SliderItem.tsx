import { Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import { ISliderDataSource } from '../../helpers/types';
const SliderItem: React.FC<{
  style?: ViewStyle;
  item: ISliderDataSource;
}> = ({ style, item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        style={[
          styles.image,
          {
            width: width * 0.5,
            height: height * 0.2,
          },
        ]}
        source={item.image}
        alt={item.title}
      />
      <Text style={styles.title}> {item.title} </Text>
      <Text style={styles.body}> {item.description} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'HindSiliguri-Bold',
    fontSize: 36,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 64,
    paddingBottom: 32,
  },
  body: {
    fontFamily: 'HindSiliguri-Regular',
    fontSize: 14,
    color: '#7C7C7C',
    textAlign: 'center',
  },
});
export default SliderItem;
