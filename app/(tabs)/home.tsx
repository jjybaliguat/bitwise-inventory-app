import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';
import { API_KEY, API_URL } from '@/constants';
import { Sale } from '@/types/sales';
import { formatCurrency } from '@/utils/formatCurrency';

const fetcher = async (url: string) => {

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
};


export default function Dashboard() {
  const {data: sales, isLoading } = useSWR(`${API_URL}/protected/sales`, fetcher)

  return (
    <SafeAreaView className="flex-1 bg-primary p-4 pb-[80px]">
      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-4">
        {/* <Image
          source={{ uri: 'https://via.placeholder.com/50' }} 
          className="w-12 h-12 rounded-full" 
        /> */}
        <Text className='text-2xl font-bold text-white'>Bitwise</Text>
        <View className="flex-row items-center">
          <View>
            <TouchableOpacity className="mr-2 bg-secondary p-4 rounded-[16px]">
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity className="mr-2 bg-secondary-200 p-4 rounded-[16px]">
              <Ionicons name="add-outline" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Inventory Overview */}
      <View className="flex-row justify-between mb-4">
        <View className="bg-white p-4 rounded-[16px] shadow flex-1 mr-2">
          <Ionicons name="alert-circle-outline" size={24} color="red" />
          <Text className="text-gray-700 font-semibold">Out of Stock</Text>
          <Text className="text-xl font-bold">5</Text>
        </View>
        <View className="bg-white p-4 rounded-[16px] shadow flex-1 mx-2">
          <Ionicons name="warning-outline" size={24} color="orange" />
          <Text className="text-gray-700 font-semibold">Low Stock</Text>
          <Text className="text-xl font-bold">12</Text>
        </View>
        <View className="bg-white p-4 rounded-[16px] shadow flex-1 ml-2">
          <Ionicons name="cube-outline" size={24} color="green" />
          <Text className="text-gray-700 font-semibold">Total Items</Text>
          <Text className="text-xl font-bold">120</Text>
        </View>
      </View>
      
      {/* Recent Sales */}
      <Text className="text-lg font-bold text-white mb-2">Recent Sales</Text>
      <ScrollView>
        {sales?.map((sale: Sale, index: number) => (
          <View key={index} className="flex-row justify-between p-6 bg-white rounded-[16px] mb-2">
            <View>
              <Text className="text-gray-900">{sale.customerName}</Text>
              <Text className="text-gray-700">Items: {sale.items.length}</Text>
            </View>
            <Text className="text-green-600 font-bold">+{formatCurrency(sale.totalAmount)}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
