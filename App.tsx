import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTI3LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU3MTQ0MzAyLCJleHAiOjE2NTc3NDkxMDJ9.XxvR4ah2U6NeUFAxKtI-sSzByFfbHGcz06LGpp1FMPVCar6mQyfctQgtKOkg2w5Wv_luULa0SgcSovS6VNUB9_BBlFdH7PYBjQO3N1N0Dwi53FBzA0rdnSkRGdj5Oe7hQ-9fshljlo5cJUYBbz4N0Ndpt323V5Eu8lGqJZ8Z5husoCiK93fZ0l3-Vr0M_sLvulZAELXGRG1QmYCwMwrp43HF9zyOLjcSHPVCvbpettqGxGv8Gne7O-XbykNv8ehG81vPcJDMSImwXGY8Yd47EoIrxdoN-3IlJumBK1Ql29hy5N7HBbk2oil3KMwBbw4MowB7rdlaT1i5_5Xr6q0iIg";

export const client = new ApolloClient({
  uri: "https://api-dev.foodstyles.com/graphql",
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
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <StatusBar style={"light"} />
          <Navigation />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
