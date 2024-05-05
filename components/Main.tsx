import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { APIData } from '../lib/definitions';
import {getWeather} from '../lib/data';

// Dummy data
const DATA = {
  temp: 0,
  description: '',
  feels_like: 0,
};

function Main(): React.JSX.Element {
  const {data, error, isLoading} = getWeather();

  if(!isLoading && data) {
    const list = data?.list[0];
    const temp = list.main.temp;
    DATA.temp = Math.floor((parseInt(temp) - 32)/1.8);
    DATA.description = list.weather[0].description;
    DATA.feels_like = Math.floor((parseInt(list.main.feels_like) - 32)/1.8);
  }

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : 
      (
        <View>
          <Text style={styles.temp}>{DATA.temp}°C</Text>
          <Text style={styles.title}>{DATA.description}</Text>
          <Text style={styles.subTitle}>
            Feels like {DATA.feels_like}°C
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    temp: {
        textAlign: 'center',
        fontSize: 110,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: -20
    },
    container: {
      flex: 2,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    subTitle: {
      color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Main;