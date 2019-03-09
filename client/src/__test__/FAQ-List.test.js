import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";

import FAQList from "../components/FAQ-List";

configure({ adapter: new Adapter() });

const mockFAQs = () => [
  { title: "title1", body: "body1" },
  { title: "title2", body: "body2" }
];

describe("<FAQList />", () => {
  let mockSelectFAQFn = jest.fn();
  const wrapper = shallow(
    <FAQList selectedIndex={0} faqs={mockFAQs()} selectFAQ={mockSelectFAQFn} />
  );

  it("renders properly and matches snapshot", () => {
    expect(toJSON(wrapper.find("div"))).toMatchSnapshot();
  });
  it("should show correct number of faq title elements", () => {
    expect(wrapper.find("h2")).toHaveLength(mockFAQs().length);
  });
  it("should render the titles properly", () => {
    mockFAQs().forEach((faq, index) => {
      wrapper.find(".clickable").at(index);
      expect(
        wrapper
          .find(".clickable")
          .at(index)
          .text()
      ).toBe(mockFAQs()[index].title);
    });
  });

  it("should have only 1 FAQ selected", () => {
    expect(wrapper.find(".selected")).toHaveLength(1);
  });
  it("should call a function when a FAQ is clicked", () => {
    wrapper
      .find(".clickable")
      .at(1)
      .simulate("click");
    expect(mockSelectFAQFn).toHaveBeenCalledTimes(1);
  });
});
