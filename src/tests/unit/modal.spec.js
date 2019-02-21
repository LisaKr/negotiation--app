import { mount, createLocalVue } from "@vue/test-utils";
import Modal from "../../components/modal.vue";

describe("modal.vue", () => {
  test("renders without exploding", () => {
    const wrapper = mount(Modal);
    expect(wrapper.is("div")).toEqual(true);
    expect(wrapper.classes()).toContain("modal");
  });

  test("clicking on the closing button should call the method handler", () => {
    const wrapper = mount(Modal);
    wrapper.setMethods({ closeModal: jest.fn() });
    wrapper.find(".closing").trigger("click");
    expect(wrapper.vm.closeModal).toBeCalled();
  });

  test("success result is calculated correctly", () => {
    //A local copy of Vue created by createLocalVue to use when mounting the component.
    //Prevents polluting the original Vue copy.
    const localVue = createLocalVue();

    //arrange
    //When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.
    //we are mocking mounting the vue component with this values provided
    let mixin = {
      mounted() {
        this.employer = 500;
        this.employee = 100;
      }
    };

    localVue.mixin(mixin);

    const wrapper = mount(Modal, {
      localVue
    });

    expect(wrapper.vm.result).toBe("Success");
  });

  test("failure result is calculated correctly", () => {
    const localVue = createLocalVue();

    let mixin = {
      mounted() {
        this.employer = 100;
        this.employee = 500;
      }
    };

    localVue.mixin(mixin);

    const wrapper = mount(Modal, {
      localVue
    });

    expect(wrapper.vm.result).toBe("Failure");
  });
});
