import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR, { mutate } from 'swr';
import { API_KEY, API_URL } from '@/constants';
import { Sale } from '@/types/sales';
import { formatCurrency } from '@/utils/formatCurrency';
import { useAuth } from '@/app/context/AuthContext';
import React, { useState } from 'react';
import images from '@/constants/images';
import SearchInput from '@/components/SearchInput';
import TopProducts from '@/components/List/TopProducts';
import EmptyState from '@/components/EmptyState';
import RecentSales from '@/components/List/RecentSales';
import SalesOverviewCards from '@/components/cards/SalesOverviewCards';
import InventoryOverviewCards from '@/components/cards/InventoryOverviewCards';
import LowQuantityProducts from '@/components/List/LowQuantityProducts';


export default function Dashboard() {
  const {authState, onLogout} = useAuth()
  const user = authState?.user

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    mutate("getRecentSales");
    mutate("getTopSelling");
    mutate("getInventoryOverview");
    mutate("getSaleMetrics");
    mutate("getLowQuantityProducts");
    setRefreshing(false);
  };

  return (
    <SafeAreaView className='bg-primary pb-[80px]'>
      <FlatList
        data={[]}
        keyExtractor={(item: any)=>item.id}
        renderItem={({item}) => (
          <Text className='text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className='flex flex-row justify-between items-start mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome Back!</Text>
                <Text className="text-2xl font-psemibold text-white">{user?.name.split(" ")[0]}</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoWhite}
                  className="w-40 h-12" 
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            
            {/* Sales Overview */}
            <View className='mt-4'>
            <Text className="text-lg font-pregular text-gray-100 mb-3">
                Sales Overview
              </Text>
              <SalesOverviewCards />
            </View>
            {/* Inventory Summary */}
            <View className='mt-4'>
            <Text className="text-lg font-pregular text-gray-100 mb-3">
                Inventory Summary
              </Text>
              <InventoryOverviewCards />
            </View>

            <View className="w-full flex-1 pt-8 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Top Selling Products
              </Text>

              <TopProducts />
            </View>
            {/* Recent Sales */}
            <View className='w-full pt-5 flex-1 pb-8'>
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Recent Sales
              </Text>

              <RecentSales />
            </View>
            {/* Low Quantity */}
            <LowQuantityProducts />
          </View>
        )}

        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
        }

        // ListEmptyComponent={
        //   () => (
        //     <EmptyState
        //       title="No Products Found"
        //       subtitle="No products created yet"
        //     />
        //   )
        // }
      />
    </SafeAreaView>
  );
}
