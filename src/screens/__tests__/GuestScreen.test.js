import renderer from "react-test-renderer";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store";
import GuestScreen from "../GuestScreen";

describe("GuestScreen Tests", () => {
  test("GuestScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <Provider store={store}>
          <GuestScreen />
        </Provider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
