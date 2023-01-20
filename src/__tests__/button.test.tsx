import React from "react";
import renderer from "react-test-renderer";

import Button from "../components/Button";

describe("Example test a button component", () => {
  it("Button not be null", () => {
    const buttonComponent = renderer
      .create(<Button onPress={() => console.log("clicked")} />)
      .toJSON();
    expect(buttonComponent).not.toBeNull();
  });
});
