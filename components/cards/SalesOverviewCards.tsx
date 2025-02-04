import { View, Text } from 'react-native'
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { API_URL } from '@/constants'
import { formatCurrency } from '@/utils/formatCurrency'
import { Ionicons } from '@expo/vector-icons'

const SalesOverviewCards = () => {
    const {data, isLoading} = useSWR("getSaleMetrics", GetSaleMetrics)

    async function GetSaleMetrics(){
        try {
            const response = await axios.get(`${API_URL}/protected/sale-metrics`)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View className="flex-row flex-wrap justify-between gap-2">
        <View className={`w-[32%] p-4 rounded-lg bg-[#02183d]`}>
            <Ionicons name='cube-outline' color="#053ea1" size={30} />
            <Text className="text-white text-sm font-bold">Total Sales</Text>
            <Text className="text-white text-md font-semibold">{isLoading ? "..." : data?.totalSales}</Text>
        </View>
        <View className={`w-[32%] p-4 rounded-lg bg-[#023618]`}>
            <Ionicons name='cash-outline' color="#037c36" size={30} />
            <Text className="text-white text-sm font-bold">Revenue</Text>
            <Text className="text-white text-md font-semibold">{isLoading ? "..." : formatCurrency(data?.totalRevenue)}</Text>
        </View>
        <View className={`w-[32%] p-4 rounded-lg bg-[#413501]`}>
            <Ionicons name='cash-outline' color="#886f02" size={30} />
            <Text className="text-white text-sm font-bold">Profit</Text>
            <Text className="text-white text-md font-semibold">{isLoading ? "..." : formatCurrency(data?.totalProfit)}</Text>
        </View>
        <View className={`w-[32%] p-4 rounded-lg bg-[#330136]`}>
            <Ionicons name='cash-outline' color="#74027a" size={30} />
            <Text className="text-white text-sm font-bold">COGS</Text>
            <Text className="text-white text-md font-semibold">{isLoading ? "..." : formatCurrency(data?.totalCostOfGoodsSold)}</Text>
        </View>
    </View>
  )
}

export default SalesOverviewCards