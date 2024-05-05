/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Demo from './components/Demo';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, ImageBackground, Text,} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const image = {uri: 'https://i.ibb.co/jVZ6Md7/8569d55cc9411ef26b6cd1e9ab17efce.jpg'};

const images = [
  'https://i.ibb.co/f0HqSgd/287e0704eceb5caaa3834a834c281314.jpg',
  'https://i.ibb.co/jVZ6Md7/8569d55cc9411ef26b6cd1e9ab17efce.jpg',
  'https://i.ibb.co/3hwwjz9/896c9e231e60401a6225d9440a1e9ee5.jpg',
]

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      source={image}
      resizeMode='cover'
      blurRadius={5}
      style={styles.image}>
        <Header />
        <Main />
        {/* <APIView /> */}
        <Footer />
      </ImageBackground>
    </SafeAreaView>
    // <SafeAreaView>
    //   <ScrollView style={styles.sectionContainer}
    //   contentInsetAdjustmentBehavior="automatic">
    //     <BackgroungImage />
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 24,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
