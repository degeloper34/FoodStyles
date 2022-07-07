import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import LoginScreen from "../LoginScreen";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../../App";

describe("LoginScreen Tests", () => {
  test("LoginScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <LoginScreen />
          </Provider>
        </ApolloProvider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
