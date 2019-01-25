import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import Statistics from '../../components/Statistics'
import initialState from '../../reducers'

const store = createMockStore(initialState)

it('renders without crashing', () => {
    const wrapper = mount(<Statistics store={store}  />)
})

