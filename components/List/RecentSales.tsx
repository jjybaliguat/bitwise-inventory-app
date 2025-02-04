import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { formatCurrency } from '@/utils/formatCurrency'
import useSWR from 'swr'
import axios from 'axios'
import { API_URL } from '@/constants'

const RecentSales = () => {
  const {data: sales, isLoading} = useSWR("getRecentSales", GetRecentSales)

  async function GetRecentSales() {
    try {
      const response = await axios.get(`${API_URL}/protected/sales`)

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="mt-4">
      <FlatList
        data={sales}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="p-4 rounded-lg shadow-lg bg-[#034b44] flex flex-col gap-4">
            <Text className="text-sm font-medium mt-2 text-white">{item.customerName}</Text>
            <Text className="text-white">{formatCurrency(item.totalAmount)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default RecentSales