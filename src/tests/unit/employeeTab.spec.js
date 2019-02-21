import { mount } from "@vue/test-utils";
import EmployeeTab from "../../components/employeeTab.vue";

describe("employeeTab.vue", () => {
  test("renders without exploding", () => {
    const wrapper = mount(EmployeeTab);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("employee-container");
  });

  test("clicking on the submit button should call the method handler", () => {
    //arrange: mocking props so that the button is shown
    const wrapper = mount(EmployeeTab, {
      propsData: {
        showSubmitInfoForEmployee: true
      }
    });
    wrapper.setMethods({ handleEmployeeSubmit: jest.fn() });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.handleEmployeeSubmit).toBeCalled();
  });
});
