import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';
import PrimaryButton from '../comps/Button';
function QuotesScreen({ route }) {
    const { DATA } = route.params;
    const [quote, setQuote] = useState('');
    const color=route.params.color;
    const color2=route.params.color2;
    const color0=route.params.color0;
    useEffect(() => {
        const length = DATA.length;
        const randomIndex = Math.floor(Math.random() * length);
        setQuote(DATA[randomIndex]);
    }, [DATA]);
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(quote);
      };
    
    return (
        <LinearGradient
        colors={[color0,color, color2, ]}  // Example gradient colors
        style={styles.gradient}>
            
                <View style={styles.container}>
                    <Text style={styles.quoteText}>{quote}</Text>
                    <PrimaryButton buttoncolor={color2} cliked={copyToClipboard} >Copy To Clipboard</PrimaryButton>
                </View>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
         // Ensures the background image covers the screen
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
         // Adds a semi-transparent overlay to improve text readability
    },
    quoteText: {
        fontSize: 22,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFFFFF', // White color for text
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});

export default QuotesScreen;
