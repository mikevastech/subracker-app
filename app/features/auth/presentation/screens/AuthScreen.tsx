import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import AppContainer from '../../../app/presentation/widgets/AppContainer';
const AuthScreen: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  return (
    <AppContainer>
      <SafeAreaView style={[styles.container, style]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subTitle}>
            In order to use the application please{'\n'}register first.
          </Text>
        </View>
      </SafeAreaView>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'HindSiliguri-Bold',
    fontSize: 24,
    color: 'white',
  },
  subTitle: {
    fontFamily: 'HindSiliguri-Regular',
    fontSize: 14,
    color: '#7C7C7C',
    textAlign: 'center',
  },
});
export default AuthScreen;
