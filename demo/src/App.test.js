import { shallow } from 'enzyme'
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug())
});
