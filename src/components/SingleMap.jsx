import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const SingleMap = ({ place }) => {
    const mapRef = useRef(null);
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/back/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Text style={styles.name}>{place.name}</Text>

                <Text style={styles.address}>Address: {place.address}</Text>

                <View style={styles.mapContainer}>
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={{
                            latitude: place.coordinates[0].lat,
                            longitude: place.coordinates[0].lng,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }}
                    >
                        <Marker
                            key={place.name}
                            coordinate={{
                                latitude: place.coordinates[0].lat,
                                longitude: place.coordinates[0].lng,
                            }}
                        >
                            <View>
                                <Image
                                    source={place.image}
                                    style={styles.markerImage}
                                />
                            </View>
                        </Marker>
                    </MapView>
                </View>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: height * 0.12,
        padding: 15
    },

    back: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: height * 0.045,
        left: 10,
        zIndex: 10
    },

    name: {
        fontSize: 24,
        color: '#ffe8e8',
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: height * 0.015
    },

    address: {
        fontSize: 15,
        color: '#ffe8e8',
        fontWeight: '300',
        marginBottom: height * 0.03,
        paddingHorizontal: 10,
        textAlign: 'center'
    },

    mapContainer: {
        width: '100%',
        height: height * 0.65,
        borderRadius: 12,
        overflow: 'hidden',
    },

    map: {
        width: '100%',
        height: '100%',
    },

    markerImage: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#4d9189',
        width: 60,
        height: 60
    },

});

export default SingleMap;