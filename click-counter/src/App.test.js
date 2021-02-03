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

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttribute(wrapper,"increment-button");
  expect(incrementButton.length).toBe(1);
})

test('renders decrement button', () => {
  const wrapper = setup()
  const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0")
})

test('clicking increment button increments counter display', () => {
  const wrapper = setup();
  // find button
  const incrementButton = findByTestAttribute(wrapper,"increment-button");
  // click button
  incrementButton.simulate('click');
  // find display, and test that the number matches
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe('1');
})

test('clicking decrement button decrements counter display', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttribute(wrapper, 'increment-button');
  incrementButton.simulate('click');
  const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const count = findByTestAttribute(wrapper, 'count').text();
  expect(count).toBe('0');
})
