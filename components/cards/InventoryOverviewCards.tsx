import { View, Text } from 'react-native'
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { API_URL } from '@/constants'
import { formatCurrency } from '@/utils/formatCurrency'

const InventoryOverviewCards = () => {
    const {data, isLoading} = useSWR("getInventoryOverview", GetInventoryOverview)

    async function GetInventoryOverview(){
        try {
            const response = await axios.get(`${API_URL}/protected/inventory-summary`)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View className="flex-row flex-wrap gap-2">
      <View className={`w-[40%] p-4 rounded-lg bg-[#664265]`}>
        <Text className="text-white text-sm font-bold">Quantity In hand</Text>
        <Text className="text-white text-md font-semibold">{isLoading ? "..." : `${data?.quantityInHand} pcs`}</Text>
      </View>
      <View className={`w-[40%] p-4 rounded-lg bg-[#4b0150]`}>
        <Text className="text-white text-sm font-bold">Inventory Value</Text>
        <Text className="text-white text-md font-semibold">{isLoading? "..." : formatCurrency(data.totalInventoryValue)}</Text>
      </View>
    </View>
  )
}

export default InventoryOverviewCards