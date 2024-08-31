import React from 'react';
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import LottieView from 'lottie-react-native';

function FeelingButton({ feeling, color, animation, clicked }) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{ color: 'black' }}
                style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
                onPress={clicked}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{feeling}</Text>
                    <LottieView
                        style={styles.animation}
                        source={animation}
                        autoPlay
                        loop
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default FeelingButton;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 170,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    pressed: {
        opacity: 0.7,
    },
    animation: {
        width: 100,
        height: 100,
    },
});