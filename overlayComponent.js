import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Overlay extends React.Component {

    render() {
        const {description, icon} = this.props.weather.data.weather[0];
        const url = `http://openweathermap.org/img/w/${icon}.png`;
        return (
            <View style={styles.overlay}>
                <Text style={styles.title}>{this.props.weather.data.name}</Text>
                <Text style={styles.title}>{description}</Text>
                <Image 
                    style={{width: 50, height: 50}} 
                    source={{ uri: url}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.7,
    width: 250,
    height: 150,
    left: 100,
    top: 620,
    justifyContent: 'center',
    padding: 20,
  },
  title:{
      fontSize: 20,
  }
});
