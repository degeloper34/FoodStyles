import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import {StatusBar} from "expo-status-bar";
import {LogBox} from "react-native";
import fetch from "cross-fetch";
import {SafeAreaProvider} from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import MainNavigator from "./src/navigation/MainNavigator";
import {Provider} from "react-redux";
import {store} from "./src/store";

LogBox.ignoreAllLogs();

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQwLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU3MjA1OTE3LCJleHAiOjE2NTc4MTA3MTd9.UV7PUHdNHLmaeuxiLcYlqvuLGKkUFPK6dxSlpTONaWQP11Jn0PLhW-zUtVj7rqaK700Kt8VXtBEizqV9l4_U-s-S-bF4SPnJU74Gr89idJW8eVXhrdwfeVDa2-kEm3uIEju86Jl4B4sUqcN11AFzTlB1twbygsQPMzlJgw-FYT4662wY-8F4QKfGqtaUAjTu_fKYQsJ4KQfc0vXLr4166oqbuDTennYzjUVas80LYIlQcimfBQG2SSwk6dEgA04sYntJhrU9ol0j4Zg2vP_wMyl_Exp4s7tQPMTm4xcY_ftTgsdRrBwszL8Vm0ZMoGTIFzKTuT0ncCTL8Oiz0w3OOw";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: "https://api-dev.foodstyles.com/graphql",
    fetch: fetch,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
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
