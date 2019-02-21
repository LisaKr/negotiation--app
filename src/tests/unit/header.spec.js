import { mount } from "@vue/test-utils";
import Header from "../../components/header.vue";

describe("header.vue", () => {
  test("renders a div with class header", () => {
    const wrapper = mount(Header);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("header");
  });

  test("checking <h1> text to be Negotiation App", () => {
    const wrapper = mount(Header);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Negotiation App");
  });
});
