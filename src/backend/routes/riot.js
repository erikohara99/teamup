const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/champions', async (req, res) => {
    const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/champion.json");
    res.send(response.data);
})

router.get('/items', async (req, res) => {
    const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/item.json");
    res.send(response.data);
})

module.exports = router;