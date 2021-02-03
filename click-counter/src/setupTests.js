import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Set up enzyme's adapter
Enzyme.configure({ adapter: new Adapter() });
