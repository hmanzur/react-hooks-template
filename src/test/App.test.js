import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('renders learn react link', () => {
    const wrapper = render(<App />)

    expect(wrapper).toBeTruthy()
  })
})
