import App from './App';
import { shallow } from 'enzyme';


/**
 * Factory function to create a ShallowWrapper for App component
 * @function setup
 * @returns {ShallowWrapper}
*/
const setup = () => shallow(<App />);
/**
 * Function to find matching elements with matching test attributes
 * @param wrapper
 * @param val
 * @returns {*}
 */
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper,"component-app")
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();

  const button = findByTestAttribute(wrapper,"increment-button");
  expect(button.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {

})

test('clicking on button increments counter display', () => {

})
