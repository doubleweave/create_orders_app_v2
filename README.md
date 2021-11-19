# Creates an order app

This is a simple app using the Scalapay API: https://staging.api.scalapay.com/v2/orders

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ cd server
$ npm install
$ npm run start
```

Please access app by [localhost:4000](http://localhost:4000)

## Frameworks:
* front-end: React, material-ui    
* back-end: Nodejs, expressjs    
* network requests: Axios    

## main features:
#### UI features:
* Multiple forms are combined to create an order form    
* "Required" fields validation on each page    
* Use material-ui autocomplete module to prompt default value    

#### Front-end features:
* Use useReducer to maintain an order data without side effects    
* Use useMemo and useContext to provide orders data and modify data function to each page    

#### Back-end features:
* Get the front-end orders data    
* Use Axios to send data to the target API    

#### Testing：
* Snapshot testing on the "Form" module    
* Testing the useContext and useReducer    
