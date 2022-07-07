import {Ionicons} from "@expo/vector-icons";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Image, Pressable} from "react-native";
import {RootStackParamList, RootStackScreenProps} from "../../../types";
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
        options={({navigation}: RootStackScreenProps<"HomeScreen">) => ({
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
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back-circle-sharp"
                size={41}
                color="white"
              />
            </Pressable>
          ),
        })}
      />

      <Stack.Screen
        name="ActionsModal"
        component={ActionsModal}
        options={({navigation}: RootStackScreenProps<"ActionsModal">) => ({
          presentation: "containedTransparentModal",
          headerShown: false,
          animation: "fade",
        })}
      />
    </Stack.Navigator>
  );
};
