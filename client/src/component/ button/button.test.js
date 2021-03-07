
import { shallow } from "enzyme";
import { checkPropTypes } from "prop-types";
import { findByTestAttribute, setup } from "../../util/testUtil";
import { Button } from "./button.component";

describe("test button component ", () => {
    const mockFn = jest.fn();
    test("button component rendered", () => {
        const wrapper = setup({ text: "button", click: () => { } }, Button);
        const buttonCmp = findByTestAttribute(wrapper, 'button-cmp');
        expect(buttonCmp).toHaveLength(1)
    })
    test('does not throw error with expepected props', () => {
        let expectedProps = {
            click: () => { },
            text: ""
        }
        const propError = checkPropTypes(Button.propTypes, expectedProps, 'prop', Button.name);
        expect(propError).toBeUndefined()
    })
    test('call click function on onClick', () => {
        let expectedProps = {
            click: mockFn,
            text: "Button"
        }
        const wrapper = setup(expectedProps, Button);
        const buttonCmp = findByTestAttribute(wrapper, 'button-cmp');
        buttonCmp.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    })
    test('button text to be equal to passed props ', () => {
        let expectedProps = {
            click: mockFn,
            text: "Button"
        }
        const wrapper = setup(expectedProps, Button);
        const buttonCmp = findByTestAttribute(wrapper, 'button-cmp');
        expect(buttonCmp.text()).toContain("Button")
    })
})



