import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { registerRootComponent } from 'expo'

import { Home, Settings } from './views'
import { useTheme } from './hooks'

const Tab = createBottomTabNavigator()

function App() {
    const { colors, dark } = useTheme()

    const navigationTheme = {
        dark,
        colors: {
            primary: colors.primary,
            background: colors.background.primary,
            card: colors.card.primary,
            text: colors.text.primary,
            border: colors.border.primary,
            notification: colors.notification.primary,
        },
    }

    return (
        <NavigationContainer theme={navigationTheme}>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home Page' }}
                />
                <Tab.Screen
                    name="TestView"
                    component={Settings}
                    options={{ title: 'My Test Page' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

registerRootComponent(App)
