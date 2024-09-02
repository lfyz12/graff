import {createServer} from "node:http";

const express = require('express')
const app = express()

const PORT: number = 5000
const server = createServer(app)

server.listen(PORT, () => {
    console.log('Server start on port ' + PORT)
})
