import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import qs from 'qs';

export default class Map extends React.Component {

    state = {
        mapLoaded: false,
        region: {
            longitude: 16.93,
            latitude: 52.40,
            longitudeDelta: 0.04,
            latitudeDelta: 0.5,
        }
    }

    componentDidMount(){
        this.setState({mapLoaded: true});
        this.fetchWeatherData();
    }

    fetchWeatherData(){
        url = this.createUrl(this.state.region);
        axios.get(url)
            .then(res => this.props.getWeather(res));
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
        this.fetchWeatherData();
    }

    createUrl = (region) => {
        const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?'
        const QUERY_PARAMS =  {
            lon: region.longitude,
            lat: region.latitude,
            appid: 'fe5c53e8f0ccc541e7ad349aba5e555b'
        }
        query = qs.stringify({ ...QUERY_PARAMS });
        return `${ROOT_URL}${query}`;
    } 

    render() {

        if(!this.state.mapLoaded){
            return(
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }

        return (
            <MapView 
                style={{flex: 1}}
                region={this.state.region}
                onRegionChangeComplete={this.onRegionChangeComplete}
            />    
        );
    }
}