import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../hooks'

export default function Settings({ route }) {
    const theme = useTheme()
    const styles = getStyles(theme)
    
    useEffect(() => {
        console.log('MESSAGE:', route.params?.message)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the TEST view!</Text>
            <Text style={styles.text}>{route.params?.message}</Text>
        </View>
    )
}

function getStyles(theme) {
    const { colors } = theme
    return  StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: colors.text.primary,
            fontSize: 24,
            fontWeight: 'bold',
        },
    })
}
