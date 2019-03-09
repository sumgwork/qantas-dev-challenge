import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import FAQ, { GET_FAQs_QUERY } from "../pages/FAQ";

const mockFAQs = () => [
  { title: "title1", body: "body1" },
  { title: "title2", body: "body2" }
];

configure({ adapter: new Adapter() });

const mocks = [
  {
    request: { query: GET_FAQs_QUERY },
    result: { data: { faqs: null } }
  }
];

describe("<FAQ /> Page", () => {
  it("renders fine", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <FAQ />
      </MockedProvider>
    );

    expect(wrapper.text()).toContain("Loading...");
    expect(toJSON(wrapper.find(".container-fluid"))).toMatchSnapshot();
  });
});
