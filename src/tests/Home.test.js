import React from 'react'
import ReactDom from 'react-dom'
import Home from '../components/Home'
import { shallow } from 'enzyme'

describe("test jeff", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Home />)
    })


    it("Verify if H1 contain 'Welcome to reactsound-composers ", () => {
        expect(wrapper.html()).toContain("Welcome to reactsound-composers")

    })

    it("Verify with 'find' if className '.App-header' exist ", () => {
        expect(wrapper.find('.App-header').length).toEqual(1)
    })


})