/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={(props) => {
        const {toggleDrawer} = props.navigation; // <-- drawer's navigation (not from stack)
        return {
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity onPress={toggleDrawer} style={{paddingLeft: 12}}>
              <Ionicons name={'menu'} size={28} color={'black'} />
            </TouchableOpacity>
          ),
          // headerRight: () => (
          //   <TouchableOpacity onPress={toggleDrawer} style={{paddingRight: 12}}>
          //     <Ionicons name={'add'} size={28} color={'black'} />
          //   </TouchableOpacity>
          // ),
        };
      }}
    />
  </Stack.Navigator>
);

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="back"
      drawerStyle={{
        backgroundColor: '#ffffff',
        width: '80%',
      }}
      screenOptions={({route}) => ({
        drawerIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'about') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Drawer.Screen name="home" component={TabBar} />
      <Drawer.Screen name="settings" component={SettingsScreen} />
      <Drawer.Screen name="about" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      name="TabStack"
      initialRouteName={'home'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="drawer" component={DrawerMenu} />
        <RootStack.Screen name="tab" component={TabBar} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
