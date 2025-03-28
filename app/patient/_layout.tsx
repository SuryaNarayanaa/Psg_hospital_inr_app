import 'react-native-gesture-handler'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Drawer from 'expo-router/drawer'
import CustomDrawer from '@/components/CustomDrawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerOptions } from '@/constants/drawerOptions';
import {LinearGradient} from 'expo-linear-gradient'

const _layout = () => {
  return (
    <LinearGradient  colors={['#a7b9ff','#fab7c5']} dither={false} style={{flex:1}}>
    <GestureHandlerRootView style={{flex:1}}>
      <Drawer
        backBehavior='initialRoute' 
        drawerContent={(props:DrawerContentComponentProps) => <CustomDrawer {...props}/>} 
        screenOptions={DrawerOptions}
      >
        <Drawer.Screen name='index' options={{
          drawerLabel:"Profile",
          headerTitle:"Profile"
        }}/>
        <Drawer.Screen name='UpdateInr' options={{
          drawerLabel:"UpdateInr",
          headerTitle:"UpdateInr"
        }}/>
        <Drawer.Screen name='TakeDosage' options={{
          drawerLabel:"Take_Dosage",
          headerTitle:"Take_Dosage"
        }}/>
        <Drawer.Screen name='LifeStyleChanges' options={{
          drawerLabel:"LifeStyleChanges",
          headerTitle:"LifeStyleChanges"
        }}/>
        <Drawer.Screen name='OtherMeditation' options={{
          drawerLabel:"OtherMeditation",
          headerTitle:"OtherMeditation"
        }}/>
        <Drawer.Screen name='ProlongedIllness' options={{
          drawerLabel:"ProLongIllness",
          headerTitle:"ProLongIllness"
        }}/>
        <Drawer.Screen name='SideEffects' options={{
          drawerLabel:"Side Effects",
          headerTitle:"Side Effects"
        }}/>
      </Drawer>
    </GestureHandlerRootView>
    </LinearGradient>
  )
}

export default _layout