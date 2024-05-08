import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { APIData, ItemProps } from '../lib/definitions';
import {getWeather} from '../lib/data';

const DATA = [];

const Item = ({title, datetime, icon, temp}: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.tempH}>
      <Text style={styles.day}>Today {datetime}</Text>
      <Image style={styles.icon} source={icon} />
    </View>

    <Text style={styles.tempTitle}>{temp}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function APIView(): React.JSX.Element {
  const {data, error, isLoading} = getWeather();
  if(!isLoading && data) {
    populateData(data);
  }
  return (
    <View>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => 
            <Item title={item.title} 
            datetime={item.time}
            icon={item.icon}
            temp={item.temp}
            />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      )}
    </View>
  );
};


// Populate the data array
function populateData(data: APIData) {
  const list = data.list;
  list.forEach((item, index) => {
    const weather = item.weather[0];
    const icon = getIcon(weather.main);
    const time = convertTime(item.dt_txt);
    const temp = `${item.main.temp}`;
    const tempInCelcius = Math.floor((parseInt(temp) - 32)/1.8);
    DATA.push({id: index.toString(), title: weather.description, time, icon, temp: `${tempInCelcius}°C`});
  });
}

// Get the icon based on the weather condition
function getIcon(condition: string) {
 if (condition === 'Rain') {
   return require('../assets/images/rain.png');
 } else if (condition === 'Clouds') {
    return require('../assets/images/clouds.png');
  } else {
    return require('../assets/images/sunny.png');
  }
}

// for(let i = 0; i < data?.list.length; i++){

//   const description = data?.list[i].weather[0].description;
//   const temp = data?.list[i]?.main.temp || 0;
//   const tempInCelcius = Math.floor((temp - 32)/1.8)
//   const conidtion = data?.list[i].weather[0].main;
//   const datetime = data?.list[i].dt_txt;

//   if (conidtion === 'Rain') {
//     DATA.push({
//       time: convertTime(`${datetime}`),
//       icon: require('../assets/images/rain.png'),
//       temp: `${tempInCelcius}°`,
//       id: Math.random().toString(),
//       title: `${description}`,
//     });
//   } else if (conidtion === 'Clouds') {
//     DATA.push({
//       time: convertTime(`${datetime}`),
//       icon: require('../assets/images/clouds.png'),
//       temp: `${tempInCelcius}°`,
//       id: Math.random().toString(),
//       title: `${description}`,
//     });
//   } else {
//     DATA.push({
//       time: convertTime(`${datetime}`),
//       icon: require('../assets/images/sunny.png'),
//       temp: `${tempInCelcius}°`,
//       id: Math.random().toString(),
//       title: `${description}`,
//     });
//   }
// }

// Convert time to 12 hours format
const convertTime = (time: string) => {
  const timeString = time.split(' ')[1];
  const H = +timeString.substr(0, 2);
  const h = H % 12 || 12;
  const ampm = H < 12 || H === 24 ? ' AM' : ' PM';
  return h + timeString.substr(2, 3) + ampm;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    borderRadius: 20,
    backgroundColor: 'rgba(144, 164, 174, 0.8)',
    marginTop: 50,
    padding: 20,
  },
  smallBoxesCtn: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tempH: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginBottom: 15
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
  item: {
    justifyContent: 'center',
    backgroundColor: 'rgba(69, 90, 100, 0.3)',
    borderRadius: 20,
    height: 180,
    width: 250,
    marginTop: 20,
    marginRight: 10,
    // opacity: .2,
    padding: 15,
  },
  day: {
    color: 'white',
    fontSize: 20
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  tempTitle: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25
  }
});