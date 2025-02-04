import { API_URL } from "@/constants";
import axios from "axios";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import useSWR from "swr";

export default function TopProducts() {

  const {data: products, isLoading} = useSWR("getTopSelling", GetTopSellingProducts)

  async function GetTopSellingProducts(){
    try {
      const response = await axios.get(`${API_URL}/protected/top-selling`)

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="mt-4">
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.productId}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="p-4 rounded-lg shadow-lg bg-[#034b44] flex flex-col gap-4">
            {/* <Image source={{ uri: item.image }} className="rounded-lg" /> */}
            <Text className="text-sm font-medium mt-2 text-white max-w-[130px]">{isLoading? "..." : item.productName}</Text>
            <Text className="text-white">Total Units Sold: {isLoading? "..." : item.totalSold}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
