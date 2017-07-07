import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import connectedComponent, { TodoList } from '../TodoList';
import { reduxHelper } from './helpers';

const initialState = { items: [] }

describe('<TodoList />', () => {
  describe('render', () => {
    let component;
    beforeEach( () => {
      const tree = reduxHelper(connectedComponent, initialState).component
      component = mount(tree);
    });

    it ('matches snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

  });

  describe('functions', () => {
    let component;

    beforeEach( () => {
      component = mount(<TodoList items={['hello']} />);
      let input = component.find('input');
      input.simulate('focus');
      input.simulate('change', {target: { name: 'name', value: 'hello' }});
    });

     it('updates state on change', () => {
      let component = shallow(<TodoList items={[]}/>)
      let input = component.find('input');
      input.simulate('focus');
      input.simulate('change', { target: { name: 'name', value: 'Hello' } })
      expect(component.state('name')).toEqual('Hello');
    });

     it('submits the form', () => {
      let test = { dispatch: jest.fn() }
      let component = mount(<TodoList dispatch={test.dispatch} items={[]}/>)
      component.setState({ name: 'Hello' });
      component.find('form').simulate('submit');
      expect(test.dispatch).toHaveBeenCalledTimes(1);
      expect(component.state('name')).toEqual('');
    });
  });
});
