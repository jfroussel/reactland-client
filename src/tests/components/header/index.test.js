import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import Header from '../../../components/header'
import initialState from '../../../reducers'
import { Provider } from 'react-redux'
const store = createMockStore(initialState)

it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><Header /></Provider>).dive()
})

