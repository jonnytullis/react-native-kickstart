import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { useTheme } from './hooks'

function App() {
    const theme = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

registerRootComponent(App)

function getStyles(theme) {
    return  StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
}
