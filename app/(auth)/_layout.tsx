import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function AppLayout(){
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="homepage" options={{
                title: 'Home',
                tabBarIcon: ({ color , size}) => 
                <Ionicons name="home" color={color} size={size}/>,
            }}/>
        </Tabs>
    )
}