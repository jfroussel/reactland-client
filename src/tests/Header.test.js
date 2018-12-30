import React from 'react'
import ReactDom from 'react-dom'
import Header from '../components/Header'
import { shallow, mount } from 'enzyme'
import { setAuthentification} from '../actions/auth'
import Auth from '../reducers/authentification'
import { SET_AUTHENTIFICATION } from '../actions/action-types'


describe("Testing Header", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })


})