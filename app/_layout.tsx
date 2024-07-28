
import { Stack } from 'expo-router';
import CustomHeader from '../components/CustomHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};



  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  

 export default function RootLayoutNav() {
  

  return (
    <Stack>
        <Stack.Screen name="index" options={{
          header:()=>  <SafeAreaProvider>
            <CustomHeader/>
          </SafeAreaProvider>
        }} />
        
      </Stack>
    
  );
}
