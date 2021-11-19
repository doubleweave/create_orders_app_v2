import { render, screen, cleanup } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow'

import Form from '../createOrders/Form'

function mockFunction() {
  return {
    useHistory: () => ({
      push: jest.fn(),
    }),
    useLocation: () => ({
      pathname: '/totalAmount',
    }),
  }
}

jest.mock('react-router-dom', () => mockFunction())

describe('Testing Form', () => {
  it('Renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Form />)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
