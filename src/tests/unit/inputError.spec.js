import { mount } from "@vue/test-utils";
import InputError from "../../components/inputError.vue";

describe("inputError.vue", () => {
    test("renders a div with class error", () => {
        const wrapper = mount(InputError);
        expect(wrapper.is("div")).toEqual(true);
        expect(wrapper.classes()).toContain("error");
    });

    test("checking <p> text", () => {
        const wrapper = mount(InputError);
        const p = wrapper.find("p");
        expect(p.text()).toBe(
            "The input only accepts numeric values. Please try again!"
        );
    });
});
