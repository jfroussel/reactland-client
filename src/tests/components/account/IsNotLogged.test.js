import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import IsNotLogged from '../../../components/account/IsNotLogged'
import initialState from '../../../reducers'

const store = createMockStore(initialState)

it('renders without crashing', () => {
    const wrapper = mount(<IsNotLogged store={store}  />)
})

