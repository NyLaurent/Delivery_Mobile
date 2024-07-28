
import { Stack } from 'expo-router';
import CustomHeader from '../components/CustomHeader';

import BottomSheetModalProvider from '@gorhom/bottom-sheet';



export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};



  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  

 export default function RootLayoutNav() {
  

  return (

    <BottomSheetModalProvider>
    <Stack>
        <Stack.Screen name="index" options={{
          header:()=>  
            <CustomHeader/>
          
        }} />
        
      </Stack>
      </BottomSheetModalProvider>
  );
}
