const createOrdersReducer = (state, action) => {
  const { type, payload } = action
  let value
  let itemIndex
  const data = { ...state }
  switch (type) {
    //totalAmount
    case 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_AMOUNT':
      console.log('payload: ', payload)
      data.totalAmount.amount = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_CURRENCY':
      console.log('payload: ', payload)
      data.totalAmount.currency = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    //consumer
    case 'CREATE_ORDERS_UPDATE_CONSUMER_GIVENNAMES':
      console.log('payload: ', payload)
      data.consumer.givenNames = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_CONSUMER_PHONENUMBER':
      console.log('payload: ', payload)
      data.consumer.phoneNumber = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_CONSUMER_SURNAME':
      console.log('payload: ', payload)
      data.consumer.surname = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_CONSUMER_EMAIL':
      console.log('payload: ', payload)
      data.consumer.email = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    //billing
    case 'CREATE_ORDERS_UPDATE_BILLING_PHONENUMBER':
      console.log('phoneNumber: ', payload)
      data.billing.phoneNumber = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_BILLING_COUNTRYCODE':
      console.log('payload: ', payload)
      data.billing.countryCode = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_BILLING_NAME':
      console.log('payload: ', payload)
      data.billing.name = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_BILLING_POSTCODE':
      console.log('payload: ', payload)
      data.billing.postcode = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_BILLING_SUBURB':
      console.log('payload: ', payload)
      data.billing.suburb = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_BILLING_LINE1':
      console.log('payload: ', payload)
      data.billing.line1 = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    //shipping
    case 'CREATE_ORDERS_UPDATE_SHIPPING_PHONENUMBER':
      console.log('phoneNumber: ', payload)
      data.shipping.phoneNumber = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPING_COUNTRYCODE':
      console.log('payload: ', payload)
      data.shipping.countryCode = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPING_NAME':
      console.log('payload: ', payload)
      data.shipping.name = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPING_POSTCODE':
      console.log('payload: ', payload)
      data.shipping.postcode = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPING_SUBURB':
      console.log('payload: ', payload)
      data.shipping.suburb = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPING_LINE1':
      console.log('payload: ', payload)
      data.shipping.line1 = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    //items
    case 'CREATE_ORDERS_UPDATE_ITEMS_GTIN':
      console.log('phoneNumber: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].gtin = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_QUANTITY':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].quantity = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_AMOUNT':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].price.amount = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_CURRENCY':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].price.currency = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_NAME':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].name = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_CATEGORY':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].category = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_SKU':
      console.log('phoneNumber: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].sku = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ITEMS_BRAND':
      console.log('payload: ', payload)
      value = payload.value
      itemIndex = payload.itemIndex
      data.items[itemIndex].brand = value
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    //merchant
    case 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCANCELURL':
      console.log('phoneNumber: ', payload)
      data.merchant.redirectCancelUrl = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCONFIRMURL':
      console.log('payload: ', payload)
      data.merchant.redirectConfirmUrl = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_MERCHANTREFERENCE':
      console.log('payload: ', payload)
      data.merchantReference = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_AMOUNT':
      console.log('payload: ', payload)
      data.shippingAmount.amount = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_CURRENCY':
      console.log('payload: ', payload)
      data.shippingAmount.currency = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    case 'CREATE_ORDERS_UPDATE_ORDEREXPIRYMILLISECONDS':
      console.log('payload: ', payload)
      data.orderExpiryMilliseconds = payload
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    // for testing
    case 'SET_DEFAULT_VALUE_FOR_CREATE_ORDERS':
      return {
        totalAmount: {
          amount: '190.00',
          currency: 'EUR',
        },
        consumer: {
          givenNames: 'Joe',
          phoneNumber: '0400000001',
          surname: 'Li',
          email: 'test@scalapay.com',
        },
        billing: {
          phoneNumber: '0400000000',
          countryCode: 'IT',
          name: 'Joe Consumer',
          postcode: '50056',
          suburb: 'Montelupo Fiorentino',
          line1: 'Via della Rosa, 58',
        },
        shipping: {
          phoneNumber: '0400000000',
          countryCode: 'IT',
          name: 'Joe Consumer',
          postcode: '50056',
          suburb: 'Montelupo Fiorentino',
          line1: 'Via della Rosa, 58',
        },
        items: [
          {
            price: {
              amount: '10.00',
              currency: 'EUR',
            },
            quantity: 1,
            gtin: '123458791330',
            name: 'T-Shirt',
            category: 'clothes',
            sku: '12341234',
            brand: 'TopChoice',
          },
        ],
        merchant: {
          redirectCancelUrl: 'https://portal.staging.scalapay.com/failure-url',
          redirectConfirmUrl: 'https://portal.staging.scalapay.com/success-url',
        },
        shippingAmount: {
          amount: '10.00',
          currency: 'EUR',
        },
        orderExpiryMilliseconds: 600000,
        merchantReference: 'merchantOrder-1234',
      }

    // fill in items form for testing
    case 'SET_DEFAULT_VALUE_FOR_ITEMS_OBJECT':
      const testingNewItem = {
        price: {
          amount: '30.00',
          currency: 'EUR',
        },
        quantity: 2,
        gtin: '223344556677',
        name: 'Hat',
        category: 'clothes',
        sku: '23452345',
        brand: 'BestChoice',
      }
      data.items.push(testingNewItem)
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    // add a new object in items array
    case 'CREATE_ORDERS_CREATE_NEW_OBJECT_IN_ITEMS':
      console.log('payload: ', payload)
      const newItem = {
        price: {
          amount: '',
          currency: '',
        },
        quantity: 1,
        gtin: '',
        name: '',
        category: '',
        sku: '',
        brand: '',
      }
      data.items.push(newItem)
      console.log('data in reducer: ', data)
      return {
        ...data,
      }
    // delete target object in items array
    case 'CREATE_ORDERS_DELETE_TARGET_ITEM_IN_ITEMS':
      console.log('payload: ', payload)
      const targetIndex = payload
      data.items.splice(targetIndex, 1)
      console.log('data in reducer: ', data)
      return {
        ...data,
      }

    default:
      return {
        ...state,
      }
  }
}

export default createOrdersReducer
