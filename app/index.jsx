import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Link href={"login"}>
        <Text>Go To Login Screen</Text>
        <StatusBar style="dark-content" backgroundColor="white" />
      </Link>
    </View>
  );
}
