import { mount } from "@vue/test-utils";
import EmployerTab from "../../components/employerTab.vue";

describe("employerTab.vue", () => {
  test("renders without exploding, has a div with right name", () => {
    const wrapper = mount(EmployerTab);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("employer-container");
  });

  test("clicking on the submit button should call the method handler", () => {
    //mocking props so that the button is shown
    const wrapper = mount(EmployerTab, {
      propsData: {
        showSubmitInfoForEmployer: true
      }
    });
    wrapper.setMethods({ handleEmployerSubmit: jest.fn() });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.handleEmployerSubmit).toBeCalled();
  });
});
