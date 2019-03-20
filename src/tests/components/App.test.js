import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createMockStore } from 'redux-test-utils';
import App from '../../components/App'
import initialState from '../../reducers'
const store = createMockStore(initialState)
import { Provider } from 'react-redux'

it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>).dive()
})

