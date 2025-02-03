import { View, Text, ScrollView, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AuthContext'
import Loader from '@/components/Loader'

const Login = () => {
  const {onLogin} = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await onLogin!(formData.email, formData.password)
      if(!response.user){
        Alert.alert("Error", "Invalid email or password!");
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      Alert.alert("Error", "Invalid email or password");
    }
  }

  return (
    <SafeAreaView
      className='h-full'
    >
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="flex-1 items-center">
            <Image
              source={images.logoBlack}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image
              source={images.loginImage}
              className="max-w-[350px] w-full h-[268px]"
              resizeMode="contain"
            />
          <Text className="text-4xl font-semibold mb-4">Bitwise Inventory</Text>
          <Text className="text-lg mb-6">Manage your inventory with ease</Text>
          
          <View className="w-80">
            <TextInput
              placeholder="Email"
              className="mb-4 p-4 rounded-xl bg-white shadow-md text-black"
              placeholderTextColor="gray"
              value={formData.email}
              onChangeText={text => setFormData({...formData, email: text})}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              className="mb-6 p-4 rounded-xl bg-white shadow-md text-black"
              placeholderTextColor="gray"
              onChangeText={text =>setFormData({...formData, password: text})}
            />
            <TouchableOpacity
              className="bg-secondary-200 p-4 rounded-xl shadow-lg mb-4"
              onPress={handleLogin}
              disabled={loading}
            >
              <Text className="text-center font-semibold">{loading? "Logging in..." : "Login"}</Text>
            </TouchableOpacity>
            {/* <Link href="/forgot-password" className="text-center">
              Forgot Password?
            </Link> */}
          </View>
          
          <Text className="absolute bottom-10 text-sm">© 2025 BitwisePCTrading</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login