const axios = require('axios');
const Ticker = require('../models/tickerSchema');

async function fetchAndSaveTickers(req, res) {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;

        await Ticker.deleteMany({}); // Clear existing data in the database

        const tickerData = Object.values(tickers).slice(0, 10).map(ticker => ({
            name: ticker.name,
            last: ticker.last,
            buy: ticker.buy,
            sell: ticker.sell,
            volume: ticker.volume,
            base_unit: ticker.base_unit,
        }));

        await Ticker.insertMany(tickerData);
        res.status(200).json({
            success: true,
            message: "Tickers fetched and saved successfully",
            data: tickerData
        })

        // console.log('');
    } catch (error) {
        res.status(200).json({
            success: true,
            error: `Error fetching and saving tickers: ${error}`
        })
    }
}

module.exports = {
    fetchAndSaveTickers,
};
