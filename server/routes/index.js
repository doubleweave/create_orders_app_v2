require('dotenv').config()
var express = require('express')
const axios = require('axios')

var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/**
 * @swagger
 * /createOrders:
 *    post:
 *      tags: [createOrders]
 *      summary: Sending form data to target api
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalAmount:
 *                 type: object
 *                 description: Total Amount of the order
 *                 properties:
 *                  amount:
 *                    type: string
 *                    description: Amount of the order
 *                    example: '190.00'
 *                  currency:
 *                    type: string
 *                    description: Currency type (should be EUR)
 *                    example: 'EUR'
 *               consumer:
 *                 type: object
 *                 description: Total Amount of the order
 *                 properties:
 *                  phoneNumber:
 *                    type: string
 *                    example: '0400000001'
 *                  givenNames:
 *                    type: string
 *                    description: First name
 *                    example: 'Joe'
 *                  surname:
 *                    type: string
 *                    description: Last name
 *                    example: 'Smith'
 *                  email:
 *                    type: string
 *                    description: Consumer's email
 *                    example: 'test@scalapay.com'
 *               billing:
 *                 type: object
 *                 properties:
 *                  phoneNumber:
 *                    type: string
 *                    example: '0400000000'
 *                  countryCode:
 *                    type: string
 *                    example: 'IT'
 *                  name:
 *                    type: string
 *                    example: 'Joe Consumer'
 *                  postcode:
 *                    type: string
 *                    example: '50056'
 *                  suburb:
 *                    type: string
 *                    example: 'Montelupo Fiorentino'
 *                  line1:
 *                    type: string
 *                    example: 'Via della Rosa, 58'
 *               shipping:
 *                 type: object
 *                 properties:
 *                  phoneNumber:
 *                    type: string
 *                    description: Customer's phone number
 *                    example: '0400000000'
 *                  countryCode:
 *                    type: string
 *                    description: Two letter code
 *                    example: 'IT'
 *                  name:
 *                    type: string
 *                    example: 'Joe Consumer'
 *                  postcode:
 *                    type: string
 *                    example: '50056'
 *                  suburb:
 *                    type: string
 *                    example: 'Montelupo Fiorentino'
 *                  line1:
 *                    type: string
 *                    example: 'Via della Rosa, 58'
 *               items:
 *                 type: array
 *                 items:
 *                  type: object
 *                  properties:
 *                    gtin:
 *                      type: string
 *                      description: Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]
 *                      example: '123458791330'
 *                    quantity:
 *                      type: number
 *                      example: 1
 *                    price:
 *                      type: object
 *                      properties:
 *                        amount:
 *                          type: string
 *                          example: '10.00'
 *                        currency:
 *                          type: string
 *                          example: 'EUR'
 *                    name:
 *                      type: string
 *                      example: 'T-Shirt'
 *                    category:
 *                      type: string
 *                      example: 'clothes'
 *                    sku:
 *                      type: string
 *                      description: Stock Keeping Unit code
 *                      example: '12341234'
 *                    brand:
 *                      type: string
 *                      example: 'TopChoice'
 *               merchant:
 *                 type: object
 *                 properties:
 *                  redirectCancelUrl:
 *                    type: string
 *                    example: 'https://portal.staging.scalapay.com/failure-url'
 *                  redirectConfirmUrl:
 *                    type: string
 *                    example: 'https://portal.staging.scalapay.com/success-url'
 *               merchantReference:
 *                 type: string
 *                 example: 'merchantOrder-1234'
 *               shippingAmount:
 *                 type: object
 *                 properties:
 *                  amount:
 *                    type: string
 *                    example: '10.00'
 *                  currency:
 *                    type: string
 *                    example: 'EUR'
 *               orderExpiryMilliseconds:
 *                 type: number
 *                 example: 600000
 *      responses:
 *        200:
 *          descriptions: return token and checkoutUrl
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *                    description: "Scalapay order unique token"
 *                    example: "71KH916VPE"
 *                  expires:
 *                    type: string
 *                    description: "Date and time of the order to expire in ISO 8601 format"
 *                    example: "2020-11-08T13:06:17.858Z"
 *                  checkoutUrl:
 *                    type: string
 *                    description: "Redirect Url to the Scalapay checkout"
 *                    example: "https://portal.staging.scalapay.com/checkout/71KH916VPE"
 */
router.post('/createOrders', (req, res) => {
  const data = req.body

  axios.defaults.headers.common = {
    Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
  }
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
