import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";


export default function RootLayout() {

  const [session, setSession] = useState<Session | null>(null)
  const segments = useSegments()
  const router = useRouter()
  const InAuthGroup = segments[0] === "(auth)"

  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session){
        if(!InAuthGroup){
          router.push('/(auth)/homepage')
        }
      }else{
        if(InAuthGroup){
          router.push('/welcomeScreen')
        }
      }
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])





  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="welcomeScreen" options={{headerShown: false}}/>
      <Stack.Screen name="login" options={{headerShown: false}}/>
      <Stack.Screen name="signup" options={{headerShown: false}}/>
    </Stack>
  )
}
