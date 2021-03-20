import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

const SongListScreen = (props) => {
    const [songList, setSongList] = useState(null);
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
                setSongList(data.results)
                console.log(data.results);
            })
    }, []);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Song_Detail', { track_ID: item.trackId })}>
                {item.kind == "song" ? (
                    <View style={styles.viewBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: item.artworkUrl100 }}
                                style={styles.imageView}
                            />
                            <View style={{ flexDirection: 'column', marginTop: 20, marginLeft: 20 }}>
                                <Text style={styles.trackName}>{item.trackName}</Text>
                                <Text style={styles.artistName}>{item.artistName}</Text>
                                <Text style={styles.timeSec}>{Math.floor(item.trackTimeMillis / 60000)} min {((item.trackTimeMillis % 60000) / 1000).toFixed(0)} sec</Text>
                            </View>
                        </View>
                    </View>
                ) : null}
            </TouchableOpacity>
        );
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.songsView}>
                <Text style={styles.songsText}>SONGS</Text>
            </View>
            {songList ? <FlatList
                data={songList}
                renderItem={renderItem}
                keyExtractor={val => val.trackTimeMillis}
                style={{ width: '100%', height: 650 }}
            /> : <ActivityIndicator color="blue" />}
        </View>
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
    viewBox: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: 'white'
    },
    imageView: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginLeft: 20
    },
    trackName: {
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    artistName: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal'
    },
    timeSec: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal'
    }
});

export default SongListScreen;
