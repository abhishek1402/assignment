
import { shallow, mount } from "enzyme";

export const findByTestAttribute = (wrraper, value) => {
    return wrraper.find(`[data-test="${value}"]`)
}


export const setup = (props = {}, Compnent) => {
    let wrapper = shallow(
        <Compnent {...props}></Compnent>
    );
    return wrapper
}
