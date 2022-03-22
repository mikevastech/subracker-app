import { Text } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import AppContainer from '../../../app/presentation/widgets/AppContainer';
import Pagination from '../widgets/slider/Pagination';
import Slider from '../widgets/slider/Slider';
import SliderList from '../widgets/slider/SliderList';
const OnboardingScreen: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  return (
    <AppContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Slider>
          <SliderList currentIndex={2} />
        </Slider>
        {/*
          <Slider>
            <SliderList />
            <SliderIndicator />
          </Slider>
        */}
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

{
  /*
  <SliderListIndicator>
    <SkipButton>
    <DotIndicator>
    <NextButton>
  </SliderListIndicator>
*/
}
