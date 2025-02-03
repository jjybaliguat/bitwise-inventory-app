import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Product = () => {
  const { code } = useLocalSearchParams();

  useEffect(() => {
 
  }, [code]);

  return (
    <SafeAreaView className="h-full">
      <Text>{code}</Text>
    </SafeAreaView>
  );
};

export default Product;