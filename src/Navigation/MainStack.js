import React from 'react'
import PointsDetailScreen from '../Screens/PointsDetailScreen'
import PointsListingScreen from '../Screens/PointsListingScreen'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function () {
    return (
        <>
            <Stack.Screen options={{ headerShown: true }}
                name="Star Wars Blaster Tournament"
                component={PointsListingScreen}
            />
            <Stack.Screen options={{ headerShown: false }}
                name="PointsDetailScreen"
                component={PointsDetailScreen}
            />
        </>
    )
}


