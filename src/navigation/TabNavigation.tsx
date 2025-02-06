import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
 
  const tabBarIconStyle = ({ focused }:any) => {
    const scale = focused ? 1.2 : 1;
    return {
      transform: [{ scale }],
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff", 
          borderTopWidth: 0,
          // marginBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#FF681F',
        tabBarInactiveTintColor: '#8e8e8e', 
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="home-outline" size={size} color={color} style={tabBarIconStyle({ focused })} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="grid-outline" size={size} color={color} style={tabBarIconStyle({ focused })} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="person-outline" size={size} color={color} style={tabBarIconStyle({ focused })} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
