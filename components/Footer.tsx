import React from 'react';
import {Text, View, Image,
FlatList, StyleSheet} 
from 'react-native';
import APIView from './APIView';


function Footer(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <View style={styles.resHeader}>
          <Image style={styles.icon} source={require('../assets/images/clock.png')} />
          <Text style={styles.text}>Next 15 hours</Text>
        </View>

        <APIView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    borderRadius: 20,
    backgroundColor: 'rgba(144, 164, 174, 0.8)',
    marginTop: 50,
    padding: 20,
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  resHeader: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25
  }
});


export default Footer;
