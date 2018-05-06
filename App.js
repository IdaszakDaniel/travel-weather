import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from "./mapComponent";
import Overlay from "./overlayComponent";

export default class App extends React.Component {

  state = {
    weather : {},
    dataFetched : false
  }

  getWeather = (el) => {
    this.setState({weather: el, dataFetched: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <Map getWeather={this.getWeather}/>
        {this.state.dataFetched && <Overlay weather={this.state.weather}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
