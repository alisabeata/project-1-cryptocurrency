import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('Header length', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('Balance length', () => {
    expect(wrapper.find('Connect(Balance)').length).toEqual(1);
  });

  it('Exchange length', () => {
    expect(wrapper.find('Exchange').length).toEqual(1);
  });

  it('ChartArea length', () => {
    expect(wrapper.find('ChartArea').length).toEqual(1);
  });
});
