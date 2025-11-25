const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
const connectDB = require("./db/connect.js")
const path = require("path")
require("dotenv").config()
const notFound = require("./middleware/not-found.js")
const errorHandler = require("./middleware/error-handler.js")
const helmet = require("helmet")
const YAML = require("yamljs")
const swaggerUi=require('swagger-ui-express');


// health for render
app.get("/health" , (req,res) =>{
  res.status(200).send("OK")
})

// middleware

app.use(helmet())
app.use(express.static('./public'));
app.use(express.json())

const swaggerFilePath = path.resolve(__dirname,'swagger.yaml');
// Load your Swagger YAML file
const swaggerDocument = YAML.load(swaggerFilePath);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
 
app.use("/api/v1/tasks" , tasks)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(port, () => console.log(`Server running on ${port}`));
});

