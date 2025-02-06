import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function SplashScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={styles.title}
          // onPress={() => navigation.navigate('MindblowingScreen')}
          >
          Quiz
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"#000"
  },
});

export default SplashScreen;
