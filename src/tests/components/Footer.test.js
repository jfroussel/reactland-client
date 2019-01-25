import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import Footer from '../../components/Footer'
import initialState from '../../reducers'

const store = createMockStore(initialState)

it('renders without crashing', () => {
    const wrapper = mount(<Footer store={store}  />)
})

