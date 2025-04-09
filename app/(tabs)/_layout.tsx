import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34ebcf",
        headerStyle: {
            backgroundColor: "#25292e"
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
            backgroundColor: "#1f1d1d"
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Construct Now",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={30}
            ></Ionicons>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About Me",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "information-sharp" : "information-outline"}
              color={color}
              size={30}
            ></Ionicons>
          ),
        }}
      />
    </Tabs>
  );
}
