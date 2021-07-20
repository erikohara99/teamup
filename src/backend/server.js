const express = require('express');
const app = express();
const axios = require('axios');
const api_league = require("./routes/riot");

app.use(express.json());
app.use('/api/league', api_league);

app.listen(3000, () => {console.log("Server started!")});