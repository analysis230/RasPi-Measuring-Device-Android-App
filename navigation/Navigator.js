import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/MainScreen';
import AddNewScreen from '../screens/AddNewScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

import React from 'react';



const StackNavigator = createStackNavigator();




/*onst drawerContents = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'statsScreen' }); }} >

                <Text style={styles.logoText}>Bheddu</Text>
            </TouchableOpacity>
            <SeparatorBar style={{ height: 3, width: '100%' }} />

            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'searchScreen' }); }} style={{ flexDirection: 'row' }} >
                <FontAwesome name="home" color={Colors.textAndSymbols} size={24} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.screenText}>Home</Text>
            </TouchableOpacity>
            <SeparatorBar style={{ width: '80%' }} />
            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'statsScreen' }); }} style={{ flexDirection: 'row' }} >
                <Entypo name="bar-graph" color={Colors.textAndSymbols} size={24} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.screenText}>Statistics</Text>
            </TouchableOpacity>

        </View>);
}
const mainNavigator = createDrawerNavigator({
    searchScreen: Navigator,
    statsScreen: StatsScreen
}, {
    drawerBackgroundColor: 'transparent',
    contentComponent: drawerContents
});*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.drawerBackgroundColor,
        alignItems: 'flex-start',
        paddingTop: 55,
        paddingLeft: 20
    },
    logoText: {
        color: Colors.textAndSymbols,
        fontSize: 30
    },
    screenText: {
        color: Colors.textAndSymbols,
        fontSize: 24
    }
})

export default function App() {

    /*{
        Search: { screen: SearchScreen, navigationOptions: { headerShown: false } },
        Details: { screen: DetailsScreen, navigationOptions: { gestureEnabled: true, gestureDirection: 'horizontal' } },
        AddNew: { screen: AddNewScreen, navigationOptions: { gestureEnabled: true, gestureDirection: 'horizontal' } },
        Editing: { screen: EditingScreen, navigationOptions: { gestureEnabled: true, gestureDirection: 'horizontal' } }
    }*/

    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName="Home">
                <StackNavigator.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Details" component={DetailsScreen} />
                <StackNavigator.Screen name="AddNew" component={AddNewScreen} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}