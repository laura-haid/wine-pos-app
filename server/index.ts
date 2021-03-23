const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

import {Request, Response} from 'express';

const server = express();
const PORT = 5000

server.use(cors({origin: true}));
server.use(bodyParser.json({}))

server.get('/image', (req, res) => {
  
  console.log(`Should fetch in the database the home image url`); // @todo
  
  res.status(200).json(
    {
      homeUrl: 'https://www.mastrantonio.com/wp-content/uploads/2020/05/wine-7.jpg',
      message: "Url retrieved with success"
  });

})

server.post('/purchase', (req: Request, res: Response) => {
  console.log(JSON.stringify(req.body));
  // filter request body
  const httpRequest = {
    body: req.body
  }
  // @todo handle request with a controller
  try {
    // @todo input validation
    // if (!httpRequest || !httpRequest.body || !httpRequest.body.id || !httpRequest.body.token) {
      // return badRequest(`Missing param`));
    // }

    // @todo register purchase on database
    // const purchaseData = { productId: httpRequest.body.id, paymentInfo: httpRequest.body.token }
    // const databasePurchaseAddResponse = await this.databasePurchaseAdd(purchaseData)
    // @ error handling
    // if (registerUserResponse.error) {
    //   return badRequest(registerUserResponse.value)
    // }

    // @todo create order, place it in the queue (also collection in database)
    // const orderData = { productId: httpRequest.body.id, orderInfo: httpRequest.body.purchaseInfo }
    // const createOrderResponse = await this.createOrder(orderData)
    // @ error handling
    // if (createOrderResponse.error) {
    //   return badRequest(createOrderResponse.value)
    // }

    const okRequest = {
      statusCode: 200,
      body: {message: '@todo'}
    }
    res.status(okRequest.statusCode).json(okRequest.body)
  } catch (error) {
    const serverError = {
      statusCode: 500,
      body: 'Server error: ' + error + '.'
    }
    res.status(serverError.statusCode).json(serverError.body)
  }

})

server.get('/wines', (req, res) => {
  
  console.log(`Should fetch in the database the wines' information`); // @todo
  
  const wines = [
    {name: 'Cabernet', description: 'Very good', price: 2000},
    {name: 'Sauvignon', description: 'Amzing', price: 3000}]

  res.status(200).json(
    {
      wines: wines,
      message: "Wines retrieved with success"
  });

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})