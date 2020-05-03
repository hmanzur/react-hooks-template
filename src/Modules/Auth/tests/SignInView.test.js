import React from 'react'
import { render } from '@testing-library/react'
import SignInView from '../views/SignInView'

describe('SignInView', () => {
  test('Mount', () => {
    const wrapper = render(<SignInView/>)
    expect(wrapper).toMatchSnapshot()
  })
})
