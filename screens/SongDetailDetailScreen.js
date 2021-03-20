import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import moment from 'moment';

const SongDetailScreen = (props) => {
    const TRACK = props.route.params.track_ID;
    const [songDetail, setSongDetail] = useState(null);
    useEffect(() => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                data.results.map(res => res.kind == "song" ? res.trackId == TRACK ? setSongDetail(res) : null : null)
            })
    }, []);
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            {songDetail ? (
                <View>
                    <View style={styles.songsView}>
                        <Text style={styles.songsText}>{songDetail.trackName}</Text>
                    </View>
                    <Image
                        source={{ uri: songDetail.artworkUrl100 }}
                        style={styles.imageView}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.artistText}>Artist Name</Text>
                        <View style={styles.artistNameView}>
                            <Text style={styles.artistName}>{songDetail.artistName}</Text>
                        </View>
                    </View>
                    <Text style={styles.trackDetailsText}>TRACK DETAILS</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.artistText}>Track Name</Text>
                        <View style={styles.trackNameView}>
                            <Text style={styles.artistName}>{songDetail.trackName}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Track Time</Text>
                        <Text style={styles.trackTime}>{Math.floor(songDetail.trackTimeMillis / 60000)} min {((songDetail.trackTimeMillis % 60000) / 1000).toFixed(0)} sec</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Track Number</Text>
                        <Text style={styles.trackNumber}>{songDetail.trackNumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Track Price</Text>
                        <Text style={styles.trackPrice}>${songDetail.trackPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Track Explicitness</Text>
                        <Text style={styles.trackExplicitness}>{songDetail.trackExplicitness}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Track Count</Text>
                        <Text style={styles.trackCount}>{songDetail.trackCount}</Text>
                    </View>
                    <Text style={styles.collectionDetailsText}>COLLECTION DETAILS</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.artistText}>Collection Name</Text>
                        <View style={styles.collectionNameView}>
                            <Text style={styles.collectionName}>{songDetail.collectionName}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Collection Price</Text>
                        <Text style={styles.CollectionPrice}>${songDetail.collectionPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Collection Explicitness</Text>
                        <Text style={styles.CollectionExplicitness}>{songDetail.collectionExplicitness}</Text>
                    </View>
                    <Text style={styles.collectionDetailsText}>OTHERS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Release Date</Text>
                        <Text style={styles.releaseDate}>{moment(songDetail.releaseDate).format('Do/MMM/YYYY')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Country</Text>
                        <Text style={styles.country}>{songDetail.country}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.trackTimeText}>Currency</Text>
                        <Text style={styles.currency}>{songDetail.currency}</Text>
                    </View>
                    <Text></Text>
                    <Text></Text>
                </View>
            ) : <ActivityIndicator color="blue" style={{ justifyContent: 'center', flex: 1 }} />}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    songsView: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'blue'
    },
    songsText: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 16,
        color: 'white'
    },
    imageView: {
        width: '100%',
        height: 350
    },
    artistText: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop: 20,
        marginLeft: 20
    },
    artistName: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue'
    },
    artistNameView: {
        width: 125,
        height: 60,
        marginLeft: 150,
        marginTop: 20
    },
    trackNameView: {
        width: 125,
        height: 40,
        marginLeft: 150,
        marginTop: 20
    },
    trackTimeText: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 20
    },
    trackTime: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 160,
        marginTop: 10
    },
    releaseDate: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 145,
        marginTop: 10
    },
    trackNumber: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 138,
        marginTop: 10
    },
    trackPrice: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 160,
        marginTop: 10
    },
    country: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'red',
        marginLeft: 185,
        marginTop: 10
    },
    currency: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'red',
        marginLeft: 177,
        marginTop: 10
    },
    trackDetailsText: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    trackExplicitness: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 110,
        marginTop: 10
    },
    trackCount: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 150,
        marginTop: 10
    },
    collectionDetailsText: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    collectionName: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        width: 125,
        height: 60
    },
    collectionNameView: {
        width: 125,
        height: 40,
        marginLeft: 123,
        marginTop: 20
    },
    CollectionPrice: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 128,
        marginTop: 10
    },
    CollectionExplicitness: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'blue',
        marginLeft: 78,
        marginTop: 10
    }
});

export default SongDetailScreen;
