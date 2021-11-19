import myAxios from './myAxios'

export const reqCreateOrders = (orderForm) =>
  myAxios('/createOrders', orderForm, 'POST', 'reqRegister')
