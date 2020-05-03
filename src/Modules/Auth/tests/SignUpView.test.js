import {render} from '@testing-library/react'
import SignUpView from '../views/SignUpView'
import React from 'react'

describe('SignUpView', () => {
  test('Mount', () => {
    const wrapper = render(<SignUpView/>)
    expect(wrapper).toMatchSnapshot()
  })
})
