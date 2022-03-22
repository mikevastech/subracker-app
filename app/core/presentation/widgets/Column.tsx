import React from 'react';
import { Text, View } from 'native-base';
import { ViewStyle, StyleSheet } from 'react-native';

/**
 * @author Mike Vas
 */
const Column: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default Column;
