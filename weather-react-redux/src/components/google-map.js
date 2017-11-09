import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {

        const mapOptions = {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            disableDefaultUI: true
        };

        new google.maps.Map(this.refs.map, mapOptions);
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;
