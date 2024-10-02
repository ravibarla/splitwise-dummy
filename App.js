import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoaderScreen from "./src/screens/LoaderScreen";
import CreateGroupScreen from "./src/screens/CreateGroupScreen";
import GroupListScreen from "./src/screens/GroupListScreen";
import CreateGrouScreen from "./src/screens/CreateGrouScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupScreen from "./src/screens/GroupScreen";
import UsersList from "./src/screens/UsersList";
import ExpenseScreen from "./src/screens/ExpenseScreen";
import ChoosePlayerScreen from "./src/screens/ChoosePlayerScreen";
import { AuthProvider } from "./src/context/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import GroupSettingsScreen from "./src/screens/GroupSettingsScreen";
function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          transitionSpec: {
            open: { animation: "timing", config: { duration: 300 } },
            close: { animation: "timing", config: { duration: 300 } },
          },
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Logout"
          component={LogoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateGroup"
          component={CreateGroupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateGrou"
          component={CreateGrouScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupList"
          component={GroupListScreen}
          // GroupList
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
          options={{ headerShown: false }}
          // GroupList
        />
        <Stack.Screen
          name="UserList"
          component={UsersList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Expense"
          component={ExpenseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChoosePlayerScreen"
          component={ChoosePlayerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupSettings"
          component={GroupSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoaderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
