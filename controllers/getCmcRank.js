const axios = require('axios');

async function rankData() {
  let res = await axios.get(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`,
    {
      headers: {
        'X-CMC_PRO_API_KEY': '9b58894a-3b84-4ffe-92fc-aade0c49212f',
      },
    },
  );
  let coinID = [];
  let rank = res.data.data;
    for (let item of rank) {
      item.rank <= 7 ? coinID.push(item.id) : null;
    }
  // console.log(coinID);
  return coinID
}

rankData();

module.exports = rankData;