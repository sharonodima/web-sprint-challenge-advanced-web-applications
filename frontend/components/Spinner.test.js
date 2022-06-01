import Spinner from "./Spinner"
import React from 'react'
import { render, screen} from '@testing-library/react'
// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
beforeEach(() => {
  render(<Spinner/>)
})
const spinner = screen.queryByTestId("spinner")
describe("Advanced Applications", () => {
  describe("Submit", () => {
    test("Spinner turns off when you login", () => {
      expect(spinner).toBe(null)
    })
  })
})

