import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator, View } from 'react-native';

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
        this.setState({mapLoaded: true})
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
            />    
        );
    }
}