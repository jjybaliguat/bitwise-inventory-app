import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: true,
          tabBarItemStyle: {
            marginTop: 15
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: '#232533',
            borderTopLeftRadius: 30, // Rounded edges
            borderTopRightRadius: 30, // Rounded edges
            position: 'absolute', // Ensures it floats
            left: 10, // Adjust left margin
            right: 10, // Adjust right margin
            shadowColor: '#000', // Shadow for iOS
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          tabBarIconStyle: {
            marginBottom: -5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="inventory"
          options={{
            title: "Inventory",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="file-tray-stacked-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sales"
          options={{
            title: "Sales",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cash-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="suppliers"
          options={{
            title: "Suppliers",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="users"
          options={{
            title: "Users",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout