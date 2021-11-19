import TestRenderer, { act } from 'react-test-renderer'
import TotalAmount from '../createOrders/subForm/TotalAmount'
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

  const element = new TestRenderer.create(
    (
      // <NameContext.Provider value="Provided Value">
      <createOrdersContext.Provider value={contextValue}>
        <TotalAmount />
      </createOrdersContext.Provider>
    )
  )

  const testInstance = element.root

  it('useContext value got in TotalAmount', () => {
    expect(
      testInstance.findByProps({ className: 'totalAmount_amount' }).props.value
    ).toEqual('123')
  })

  // it('useReducer dispatch function called in TotalAmount', async () => {
  //   const mEvent = { target: { value: 'testing value' } }
  //   const dispatchValue = {
  //     type: 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_AMOUNT',
  //     payload: 'testing value',
  //   }

  //   await act(async () => {
  //     testInstance.findByProps({ id: 'amount' }).props.onChange(mEvent)
  //   })
  //   expect(dispatchFn).toBeCalled()
  // })
})
