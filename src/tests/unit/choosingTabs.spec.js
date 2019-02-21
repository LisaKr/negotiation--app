import { mount } from "@vue/test-utils";
import ChoosingTabs from "../../components/choosingTabs.vue";

describe("choosingTabs.vue", () => {
  test("renders without exploding, has a div with the expected class", () => {
    const wrapper = mount(ChoosingTabs);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("choosing-container");
  });

  test("clicking on the employer tab should call the method handler", () => {
    const wrapper = mount(ChoosingTabs);
    //`setMethods` updates the instance, which re-renders vnodes (and ultimately Elements)
    //to use the new method in their on handlers
    wrapper.setMethods({ showEmployer: jest.fn() });
    wrapper.find(".employer-tab").trigger("click");
    expect(wrapper.vm.showEmployer).toBeCalled();
  });

  test("clicking on the employee tab should call the method handler", () => {
    const wrapper = mount(ChoosingTabs);
    wrapper.setMethods({ showEmployee: jest.fn() });
    wrapper.find(".employee-tab").trigger("click");
    expect(wrapper.vm.showEmployee).toBeCalled();
  });
});
