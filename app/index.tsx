import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import { TouchableOpacity } from 'react-native'

const index = () => {
  return (
    <SafeAreaView
      className='h-full bg-primary'
    >
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="flex-1 items-center">
            <Image
              source={images.logoWhite}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image
              source={images.loginImage}
              className="max-w-[350px] w-full h-[268px]"
              resizeMode="contain"
            />
          <Text className="text-white text-4xl font-semibold mb-4">Bitwise Inventory</Text>
          <Text className="text-white text-lg mb-6">Manage your inventory with ease</Text>
          
          <View className="w-80">
            <TextInput
              placeholder="Username"
              className="mb-4 p-4 rounded-xl bg-white shadow-md text-black"
              placeholderTextColor="gray"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              className="mb-6 p-4 rounded-xl bg-white shadow-md text-black"
              placeholderTextColor="gray"
            />
            <TouchableOpacity
              className="bg-secondary-200 p-4 rounded-xl shadow-lg mb-4"
              onPress={() => router.push("/home")}
            >
              <Text className="text-white text-center font-semibold">Login</Text>
            </TouchableOpacity>
            {/* <Link href="/forgot-password" className="text-white text-center">
              Forgot Password?
            </Link> */}
          </View>
          
          <Text className="absolute bottom-10 text-white text-sm">© 2025 BitwisePCTrading</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index