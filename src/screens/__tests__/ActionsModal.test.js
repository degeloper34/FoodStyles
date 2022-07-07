import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import ActionsModal from "../ActionsModal";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../../App";

describe("ActionsModal Tests", () => {
  test("HomeScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <ActionsModal
              route={{
                params: {
                  item: {
                    id: 1,
                    name: "Test",
                  },
                },
              }}
            />
          </Provider>
        </ApolloProvider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
