import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BWPButton } from '..';
import renderer from 'react-test-renderer'

afterEach(cleanup)

describe("BWP Button Render checking", ()=>{
    test('BWP Button rendering correctly in md size', () => {
        const { getByTestId } = render(<BWPButton color="green" size="md">Click me</BWPButton>)
        const testItem = getByTestId("bwp-button")
        expect(testItem).toBeTruthy()
    })

    test("snapshort of bwp button in md size", () => {
        const snap = renderer.create(<BWPButton color="green" size="md">Click me</BWPButton>).toJSON()
        expect(snap).toMatchSnapshot()
    })
})

describe("BWP Button Function Checking",()=>{
    test("BWP Button render with function", () => {
        const onClick = jest.fn()
        const { getByTestId } = render(<BWPButton color="green" size="md" onClick={onClick}>Click me</BWPButton>)
        const testItem = getByTestId("bwp-button")
        
        fireEvent.click(testItem)
        expect(onClick).toBeCalled()
    })
})