import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, ViewStyle } from 'react-native';
import { AppBackground } from '../../images';

const AppContainer: React.FC<{ children: React.ReactElement; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  return (
    <ImageBackground source={AppBackground} style={[styles.container, style]}>
      {React.cloneElement(children)}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flex: 1,
  },
});
export default AppContainer;
