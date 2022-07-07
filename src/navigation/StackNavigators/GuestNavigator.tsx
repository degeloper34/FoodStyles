import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList, RootStackScreenProps} from "../../../types";
import {HeaderBackIcon} from "../../components/atoms";
import GuestScreen from "../../screens/GuestScreen";
import LoginScreen from "../../screens/LoginScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import {TextStyles} from "../../styles";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GuestScreen"
        component={GuestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({navigation}: RootStackScreenProps<"SignUpScreen">) => ({
          headerTransparent: true,
          headerTitle: "Sign up with Email",
          headerTitleStyle: {
            fontFamily: "proxima-bold",
            ...TextStyles.TEXT_STYLE_5,
          },
          headerLeft: () => <HeaderBackIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({navigation}: RootStackScreenProps<"LoginScreen">) => ({
          headerTransparent: true,
          headerTitle: "Log in",
          headerTitleStyle: {
            fontFamily: "proxima-bold",
            ...TextStyles.TEXT_STYLE_5,
          },
          headerLeft: () => <HeaderBackIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};
