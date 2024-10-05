import { Pressable, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  const { user } = useUser();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text> {user?.fullName} </Text>
      {user ? <Redirect href={"/(tabs)/home"} /> : <Redirect href={"/login"} />}
      <StatusBar style="dark-content" backgroundColor="white" />
    </View>
  );
}
