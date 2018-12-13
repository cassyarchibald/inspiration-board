import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
  test("that it matches an existing snapshot", () => {
    const wrapper = shallow(
      <Card id={999} text="Test Card" emoji="heart_eyes" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
