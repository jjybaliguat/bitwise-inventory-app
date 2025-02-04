import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import useSWR from 'swr'
import axios from 'axios'
import { API_URL } from '@/constants'
import { router } from 'expo-router'

const LowQuantityProducts = () => {
    const {data, isLoading} = useSWR("getLowQuantityProducts", GetLowQuantityProducts)

    async function GetLowQuantityProducts() {
        try {
            const response = await axios.get(`${API_URL}/protected/low-quantity-products`)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <View className='w-full pt-5 flex-1 pb-8'>
        <View className='flex flex-row gap-4 items-center mb-3'>
            <Text className="text-lg font-pregular text-gray-100">
            Low Quantity Products
            </Text>
            <TouchableOpacity
                onPress={() => router.push("/")}
            >
                <Text className='text-secondary'>View All</Text>
            </TouchableOpacity>
        </View>

        <View className="mt-4">
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
            renderItem={({ item }) => (
            <TouchableOpacity className={`p-4 rounded-lg shadow-lg ${item.stock == 0 ? "bg-rose-800" : "bg-yellow-800"} flex flex-col gap-4`}>
                <Text className="text-sm font-medium mt-2 text-white">{item.name}</Text>
                {item?.stock == 0 ? (
                    <Text className='text-white'>Out Of Stock</Text>
                ) : (
                    <Text className='text-white'>Low</Text>
                )}
            </TouchableOpacity>
            )}
        />
        </View>          
    </View>
  )
}

export default LowQuantityProducts