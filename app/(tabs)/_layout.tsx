import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        headerStyle: {
            backgroundColor: "#99a196"
        },
        headerShadowVisible: false,
        headerTintColor: "black",
        tabBarStyle: {
            backgroundColor: "#99a196",
            borderTopWidth: 0.5,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Construct Now",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={ color }
              size={ 30 }
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
              name={focused ? "information-circle-sharp" : "information-circle-outline"}
              color={color}
              size={ 30 }
            ></Ionicons>
          ),
        }}
      />
    </Tabs>
  );
}
