
import { checkPropTypes } from "prop-types";
import { findByTestAttribute, setup } from "../../util/testUtil";
import { Input } from "./input.component";

describe("test input component ", () => {
    const mockFn = jest.fn();
    const expectedProps = {
        placeholder: "Input Placeholder",
        change: mockFn,
        label: "Input Label",
        error: "",
        disabled: false
    }
    test("input component rendered", () => {
        const wrapper = setup({ expectedProps }, Input);
        const InputCmp = findByTestAttribute(wrapper, 'input-cmp');
        expect(InputCmp).toHaveLength(1)
    })
    test("does not throw error with expepected props", () => {
        const propError = checkPropTypes(Input.propTypes, expectedProps, 'prop', Input.name);
        expect(propError).toBeUndefined()
    })
    test('Print error when error prop is true', () => {
        const wrapper = setup({ ...expectedProps, error: "Input Error" }, Input);
        const InputErrCmp = findByTestAttribute(wrapper, 'error-input-cmp');
        expect(InputErrCmp.text()).toBe("Input Error")
    })
    test('Not Print error when error prop is false', () => {
        const wrapper = setup({ ...expectedProps }, Input);
        const InputErrCmp = findByTestAttribute(wrapper, 'error-input-cmp');
        expect(InputErrCmp.length).toBe(0)
    })

    test('Call Function on blur event', () => {
        const wrapper = setup({ ...expectedProps }, Input);
        const InputField = findByTestAttribute(wrapper, 'input-field');
        InputField.simulate('blur', {
            target: {
                value: 'Test',
            }
        });
        expect(mockFn).toHaveBeenCalled();
    })

})



