import React from "react";
import { shallow } from "enzyme";

//// provides html without superfluous info
// import toJSON from "enzyme-to-json";
//// but import is not needed when you mention it in jes.config.json
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

// expect(toJSON(wrapper)).toMatchSnapshot();

// expect(wrapper.find("h1").text()).toBe("Budget app");

//// since we use enzyme 'ReactShallowRenderer' is not needed
// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();
