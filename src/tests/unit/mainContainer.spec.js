import { mount } from "@vue/test-utils";
import MainContainer from "../../components/mainContainer.vue";

describe("mainContainer.vue", () => {
  test("renders without exploding", () => {
    const wrapper = mount(MainContainer);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("tab-container");
  });
});
