require('dotenv').config()
var express = require('express')
const axios = require('axios')

var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// router.get('/v2/orders', (req, res) => {
router.post('/createOrders', (req, res) => {
  atoken = 'qhtfs87hjnc12kkos '

  console.log('req.body: ', req.body)

  const data = req.body

  console.log('data: ', req.body)

  //   const data = {
  //     totalAmount: {
  //       amount: '190.00',
  //       currency: 'EUR',
  //     },
  //     consumer: {
  //       givenNames: 'Joe',
  //       phoneNumber: '0400000001',
  //       surname: 'Li',
  //       email: 'test@scalapay.com',
  //     },
  //     billing: {
  //       phoneNumber: '0400000000',
  //       countryCode: 'IT',
  //       name: 'Joe Consumer',
  //       postcode: '50056',
  //       suburb: 'Montelupo Fiorentino',
  //       line1: 'Via della Rosa, 58',
  //     },
  //     shipping: {
  //       phoneNumber: '0400000000',
  //       countryCode: 'IT',
  //       name: 'Joe Consumer',
  //       postcode: '50056',
  //       suburb: 'Montelupo Fiorentino',
  //       line1: 'Via della Rosa, 58',
  //     },
  //     items: [
  //       {
  //         price: {
  //           amount: '10.00',
  //           currency: 'EUR',
  //         },
  //         quantity: 1,
  //         gtin: '123458791330',
  //         name: 'T-Shirt',
  //         category: 'clothes',
  //         sku: '12341234',
  //         brand: 'TopChoice',
  //       },
  //     ],
  //     merchant: {
  //       redirectCancelUrl: 'https://portal.staging.scalapay.com/failure-url',
  //       redirectConfirmUrl: 'https://portal.staging.scalapay.com/success-url',
  //     },
  //     shippingAmount: {
  //       amount: '10.00',
  //       currency: 'EUR',
  //     },
  //     orderExpiryMilliseconds: 600000,
  //     merchantReference: 'merchantOrder-1234',
  //   }

  axios.defaults.headers.common = { Authorization: `bearer ${atoken}` }
  axios
    .post('https://staging.api.scalapay.com/v2/orders', data)
    .then((result) => {
      console.log(`Status: ${result.status}`)
      console.log('Body: ', result.data)
      res.send({ status: result.status, data: result.data })
    })
    .catch((err) => {
      console.error(err)
    })
})

module.exports = router
