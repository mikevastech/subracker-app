import React from 'react';
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View, ViewStyle } from 'react-native';
import AppContainer from '../../../app/presentation/widgets/AppContainer';
import Button from '../widgets/Button';
const AuthScreen: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <AppContainer>
      <SafeAreaView style={[styles.container, style]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subTitle}>
            In order to use the application please{'\n'}register first.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button width={width * 0.8} height={60} margin={{ top: 150 }} label={'Create Account'} />
          <Button
            width={width * 0.8}
            height={60}
            margin={{ top: 75 }}
            label={'Sign In'}
            color={'white'}
            backgroundColor={'#232333'}
          />
        </View>
        <View style={styles.bottomLinksContainer}>
          <Text style={styles.tcText}>
            By logging in or registering, you have agreed to the{' '}
            <Text style={styles.tcButtonLink}>Terms and Conditions</Text> and{' '}
            <Text style={styles.tcButtonLink}>Privacy Policy</Text>.
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
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottomLinksContainer: {
    marginTop: 48,
    alignItems: 'center',
    flexDirection: 'column',
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
  tcText: {
    fontFamily: 'HindSiliguri-Regular',
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
    width: '80%',
  },
  tcButtonLink: {
    fontFamily: 'HindSiliguri-Regular',
    fontSize: 12,
    color: '#FFD009',
    textAlign: 'center',
    width: '80%',
    textDecorationLine: 'underline',
  },
});
export default AuthScreen;
