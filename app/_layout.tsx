import { Stack, Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/hooks/ContextProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
          <Stack screenOptions={{headerTitleAlign:'center', headerShown:true}}>
              <Stack.Screen name='(auth)/signIn' options={{title:"Patient"}}/>
              <Stack.Screen name="index" options={{title:'Home Page'}}/>
              <Stack.Screen name="doctor" options={{title:"Doctor"}}/>
              <Stack.Screen name="patient" options={{title:"Patient"}}/>
          </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
    </AuthProvider>
  )
}
