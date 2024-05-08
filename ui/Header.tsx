import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tinubu</Text>

      <View style={styles.iconStyle}>
        <Image style={styles.icon} source={require('../assets/images/menu.png')} />
        <Image source={require('../assets/images/settings.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 62,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 20,
    },
    container: {
      position: 'relative',
      marginBottom: 100,
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      width: 30,
      height: 30
    },
    iconStyle: {
        // flex: ,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        gap: 5,
    }
})

export default Header;