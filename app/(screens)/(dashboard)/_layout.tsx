import React from 'react'
import { Redirect, router, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AuthProvider, { useAuth } from '@/app/context/AuthContext';
import CameraButton from '@/components/buttons/CameraButton';

const TabsLayout = () => {
  const {authState, isLoading} = useAuth()
  if(!authState?.authenticated && isLoading) return <Redirect href="/(screens)/Login" />

  return (
    <>
    <AuthProvider>
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
            backgroundColor: '#ffff',
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
          name="index"
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
          name="camera"
          options={{
            title: "Barcode Scanner",
            tabBarButton: () => <CameraButton />,
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
      </AuthProvider>
    </>
  )
}

export default TabsLayout