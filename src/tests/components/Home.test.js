import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import Home from '../../components/Home'
import initialState from '../../reducers'

const store = createMockStore(initialState)

it('renders without crashing', () => {
    const wrapper = mount(<Home store={store} />)
})

it('renders a header', () => {
    const wrapper = shallow(<Home store={store} />)
    expect(wrapper.find('header')).to.have.length(1)
})
it('renders a h3', () => {
    const wrapper = shallow(<Home store={store} />)
    expect(wrapper.find('h3')).to.have.length(1)
})
