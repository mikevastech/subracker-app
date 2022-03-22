/* eslint-disable @typescript-eslint/no-unsafe-call */
import { VStack, Text, Image, Center, TextArea, FlatList, HStack } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, useWindowDimensions, ViewStyle, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { G, Circle } from 'react-native-svg';
const NextItemButton: React.FC<{
  style?: ViewStyle;
  data: { id: string; title: string }[];
  percentage: number;
}> = ({ style, data, percentage }) => {
  const size = 48;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;

  const progressRef = useRef(null);
  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);
  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset = circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle stroke="#90959E" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
          <Circle
            ref={progressRef}
            stroke="#FBBE01"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 33) / 100}
          />
        </G>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Text style={{ color: '#FFD009' }}> {'>'}</Text>
        </TouchableOpacity>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    borderRadius: 24,
    padding: 15,
  },
});

export default NextItemButton;
