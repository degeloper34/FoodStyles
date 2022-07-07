import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../../App";
import SignUpScreen from "../SignUpScreen";

describe("SignUpScreen Tests", () => {
  test("SignUpScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <SignUpScreen />
          </Provider>
        </ApolloProvider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
