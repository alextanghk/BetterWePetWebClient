import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BWPNumber } from '..';
import renderer from 'react-test-renderer'

afterEach(cleanup)


describe("Vertical BWP Number Render checking", ()=>{
    test('Vertical BWP Number rendering correctly in md size', () => {
        const { getByTestId } = render(<BWPNumber vertical={true} textAlign="left" inputSize="md" />)
        const testItem = getByTestId("bwp-number")
        const testInput = getByTestId("bwp-number-input")
        expect(testItem).toBeTruthy()
    })

    test("snapshort of vertical bwp number in md size", () => {
        const snap = renderer.create(<BWPNumber vertical={true} textAlign="left" inputSize="md" />).toJSON()
        expect(snap).toMatchSnapshot()
    })
})

describe("Horizontal BWP Number Render checking", ()=>{
    test('Horizontal BWP Number rendering correctly in md size', () => {
        const { getByTestId } = render(<BWPNumber vertical={false} textAlign="left" inputSize="md" defaultValue={0}/>)
        const testItem = getByTestId("bwp-number")
        const testInput = getByTestId("bwp-number-input") as HTMLInputElement
        expect(testItem).toBeTruthy()
        expect(testInput.value).toEqual("0")
    })
    test("snapshort of horizontal bwp number in md size", () => {
        const snap = renderer.create(<BWPNumber vertical={false} textAlign="left" inputSize="md" />).toJSON()
        expect(snap).toMatchSnapshot()
    })
})

describe("BWP Number Function Check",()=>{
    test("When add value",() => {
        const { getByTestId } = render(<BWPNumber vertical={false} textAlign="left" inputSize="md" defaultValue={0}/>)
        const testClick = getByTestId("bwp-number-increase")
        const testInput = getByTestId("bwp-number-input") as HTMLInputElement
        fireEvent.click(testClick)
        expect(testInput.value).toEqual("1")
    })

    test("When add value with max limited",() => {
        const { getByTestId } = render(<BWPNumber vertical={false} textAlign="left" inputSize="md" defaultValue={3} max={3}/>)
        const testClick = getByTestId("bwp-number-increase")
        const testInput = getByTestId("bwp-number-input") as HTMLInputElement
        fireEvent.click(testClick)
        expect(testInput.value).toEqual("3")
    })

    test("When decrease value",() => {
        const { getByTestId } = render(<BWPNumber vertical={false} textAlign="left" inputSize="md" defaultValue={0}/>)
        const testClick = getByTestId("bwp-number-decrease")
        const testInput = getByTestId("bwp-number-input") as HTMLInputElement
        fireEvent.click(testClick)
        expect(testInput.value).toEqual("-1")
    })

    test("When decrease value with min limited",() => {
        const { getByTestId } = render(<BWPNumber vertical={false} textAlign="left" inputSize="md" defaultValue={1} min={1}/>)
        const testClick = getByTestId("bwp-number-decrease")
        const testInput = getByTestId("bwp-number-input") as HTMLInputElement
        fireEvent.click(testClick)
        expect(testInput.value).toEqual("1")
    })
})

