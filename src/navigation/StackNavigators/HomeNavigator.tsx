import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Image} from "react-native";
import {RootStackParamList, RootStackScreenProps} from "../../../types";
import {HeaderBackIcon} from "../../components/atoms";
import ActionsModal from "../../screens/ActionsModal";
import HomeScreen from "../../screens/HomeScreen";
import ModalScreen from "../../screens/ModalScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Image source={require("../../assets/images/logo.png")} />
          ),
        })}
      />

      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={({navigation}: RootStackScreenProps<"ModalScreen">) => ({
          presentation: "fullScreenModal",
          headerTitle: "New Food Style",
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => <HeaderBackIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="ActionsModal"
        component={ActionsModal}
        options={() => ({
          presentation: "containedTransparentModal",
          headerShown: false,
          animation: "fade",
        })}
      />
    </Stack.Navigator>
  );
};
