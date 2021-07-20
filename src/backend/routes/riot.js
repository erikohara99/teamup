const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/champions', async (req, res) => {
    const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json");
    res.send(response.data);
})

module.exports = router;