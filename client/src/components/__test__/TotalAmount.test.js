import TestRenderer, { act } from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import TotalAmount from '../createOrders/subForms/TotalAmount'
import createOrdersContext from '../context/createOrdersContext'

describe('Testing useContext and useReducer in TotalAmount', () => {
  const dispatchFn = jest.fn()
  const contextValue = [
    {
      totalAmount: {
        amount: '123',
        currency: '456',
      },
    },
    dispatchFn,
  ]

  it('useContext value got in TotalAmount', () => {
    const element = new TestRenderer.create(
      (
        <createOrdersContext.Provider value={contextValue}>
          <TotalAmount />
        </createOrdersContext.Provider>
      )
    )

    const testInstance = element.root
    expect(
      testInstance.findByProps({ className: 'totalAmount_amount' }).props.value
    ).toEqual('123')
  })

  it('useReducer dispatch function called in TotalAmount', async () => {
    const { getByTestId } = render(
      <createOrdersContext.Provider value={contextValue}>
        <TotalAmount />
      </createOrdersContext.Provider>
    )

    const amountAutoComplete = getByTestId('amount_autocomplete').querySelector(
      'input'
    )

    fireEvent.change(amountAutoComplete, { target: { value: '23' } })

    expect(dispatchFn).toBeCalled()
  })
})
