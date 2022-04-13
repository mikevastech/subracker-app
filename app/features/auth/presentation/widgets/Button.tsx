import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export interface IButtonProps {
  style?: ViewStyle;
  width?: number;
  height?: number;
  margin?: {
    top?: number;
  };
  label: string;
  color?: string;
  backgroundColor?: string;
}
const Button: React.FC<IButtonProps> = ({
  style,
  label,
  backgroundColor,
  width = 200,
  height = 50,
  margin = { top: 32 },
  color = 'black',
}) => {
  return (
    <View style={[styles.container, { marginTop: margin.top }]}>
      <TouchableOpacity style={{ width, height }}>
        {!backgroundColor ? (
          <LinearGradient
            colors={['#FFD301', '#FBBD00']}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}>
            <Text style={[styles.text, { color }]}>{label}</Text>
          </LinearGradient>
        ) : (
          <View style={[styles.gradient, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.text, { color }]}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'HindSiliguri-SemiBold',
  },
});
export default Button;
