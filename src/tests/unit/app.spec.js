import { mount } from "@vue/test-utils";
import App from "../../App.vue";

describe("App.vue", () => {
  test("renders without exploding and has a class called main", () => {
    const wrapper = mount(App);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("main");
  });
});
