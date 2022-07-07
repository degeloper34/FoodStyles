import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {StatusBar} from "expo-status-bar";
import fetch from "cross-fetch";
import {LogBox} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import MainNavigator from "./src/navigation/MainNavigator";
import {Provider} from "react-redux";
import {store} from "./src/store";

LogBox.ignoreAllLogs();

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTI3LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU3MTQ0MzAyLCJleHAiOjE2NTc3NDkxMDJ9.XxvR4ah2U6NeUFAxKtI-sSzByFfbHGcz06LGpp1FMPVCar6mQyfctQgtKOkg2w5Wv_luULa0SgcSovS6VNUB9_BBlFdH7PYBjQO3N1N0Dwi53FBzA0rdnSkRGdj5Oe7hQ-9fshljlo5cJUYBbz4N0Ndpt323V5Eu8lGqJZ8Z5husoCiK93fZ0l3-Vr0M_sLvulZAELXGRG1QmYCwMwrp43HF9zyOLjcSHPVCvbpettqGxGv8Gne7O-XbykNv8ehG81vPcJDMSImwXGY8Yd47EoIrxdoN-3IlJumBK1Ql29hy5N7HBbk2oil3KMwBbw4MowB7rdlaT1i5_5Xr6q0iIg";

export const apolloClient = new ApolloClient({
  link: new HttpLink({uri: "https://api-dev.foodstyles.com/graphql", fetch}),
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <SafeAreaProvider>
            <StatusBar style={"light"} />

            <MainNavigator />
          </SafeAreaProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}
