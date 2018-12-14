import React from "react";
import NewCardForm from "./NewCardForm";
import { shallow } from "enzyme";

describe("New Card form", () => {
  test("that it matches an existing snapshot", () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
