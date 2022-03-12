import { Text } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import AppContainer from '../../../app/presentation/widgets/AppContainer';
const OnboardingScreen: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  return (
    <AppContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Hello From Onboarding</Text>
      </SafeAreaView>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OnboardingScreen;
