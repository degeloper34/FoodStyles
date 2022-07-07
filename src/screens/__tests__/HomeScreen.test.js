import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import HomeScreen from "../HomeScreen";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../../App";

describe("HomeScreen Tests", () => {
  test("HomeScreen | Render without issues", () => {
    const setOptions = jest.fn();

    const screen = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <HomeScreen
              navigation={{
                setOptions,
              }}
            />
          </Provider>
        </ApolloProvider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
