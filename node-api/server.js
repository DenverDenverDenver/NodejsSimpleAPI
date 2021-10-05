const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require("./database/connection");
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');

//set up swagger
const swaggerDocument = yaml.load('./swagger.yaml');

//.env
dotEnv.config();

//instance of express
const app = express();

//connect to database
dbConnection();

//prevent errors from users accessing the api from an domain different to api host domain.
app.use(cors());

//parse json and encoded urls
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//swagger api documentation
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//define a base path here in app level middleware, transfer handler to the router middleware
app.use('/api/product', require('./routes/productRoutes'));

app.get('/', (req, res, next) => {
    res.send('res.send test update');
})

// get port to use from environment variable, default is 3000
const port = process.env.port || 3000;

app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
})

//error handling Middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message, 
        body: {}
    })
  })

