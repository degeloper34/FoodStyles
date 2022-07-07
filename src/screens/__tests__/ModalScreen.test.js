import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../../App";
import ModalScreen from "../ModalScreen";

describe("ModalScreen Tests", () => {
  test("ModalScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <ModalScreen />
          </Provider>
        </ApolloProvider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
