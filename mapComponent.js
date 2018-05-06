import React from 'react';
import { MapView } from 'expo';

export default class Map extends React.Component {

    state = {
        region: {
            longitude: 16.93,
            latitude: 52.40,
            longitudeDelta: 0.04,
            latitudeDelta: 0.5,
        }
    }

    render() {
        return (
            <MapView 
                style={{flex: 1}}
                region={this.state.region}
            />
        );
    }
}