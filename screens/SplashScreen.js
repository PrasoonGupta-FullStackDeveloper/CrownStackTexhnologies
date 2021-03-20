import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const SplashScreen = (props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Song_List');
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Image
            source={require('../image/splash_image.png')}
            style={styles.imageView}
        />
    );
};

const styles = StyleSheet.create({
    imageView: {
        width: '100%',
        height: '100%'
    }
});

export default SplashScreen;
