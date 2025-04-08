import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Construct Now",
        }}
      />
      <Tabs.Screen name="about" 
      options={{
        headerTitle: "About Me"
      }} 
    />
    </Tabs>
  );
}
