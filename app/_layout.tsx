import { Stack } from 'expo-router';
import { Home } from './Others/Home';
import { Onboarding } from './screens/Onboarding';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" component={Onboarding} options={{ title: "Onboarding" }} />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
    </Stack>
  );
};

export default Layout;
