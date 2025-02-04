import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CameraButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/(screens)/(dashboard)/camera")}
      style={{
        position: "absolute",
        top: -30, // Moves the button above the tab bar
        left: "50%",
        marginLeft: -35, // Centering the button
        backgroundColor: "#034b44",
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, // Shadow for Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      }}
    >
      <FontAwesome name="camera" size={30} color="white" />
    </TouchableOpacity>
  );
}
