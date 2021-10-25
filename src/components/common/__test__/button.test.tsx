import React from 'react';
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react';
import { BWPButton } from '..';
import renderer from 'react-test-renderer'

afterEach(cleanup)
test("Render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<BWPButton />, div)
    ReactDOM.unmountComponentAtNode(div)
})
test('BWP Button rendering correctly in md size', () => {
    const { getByTestId } = render(<BWPButton color="green" size="md">Click me</BWPButton>)
    const testItem = getByTestId("bwp-button")
    expect(testItem).toHaveTextContent("Click me")
    expect(testItem).toHaveClass("btn-bwp-green", "h-10","px-3","rounded-5")
})

test("snapshort of bwp button in md size", () => {
    const snap = renderer.create(<BWPButton color="green" size="md">Click me</BWPButton>).toJSON()
    expect(snap).toMatchSnapshot()
})