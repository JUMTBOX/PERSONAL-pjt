const axios = require('axios');
const mongoClient = require('./mongoConnect');
// const mongooseConnect = require('./mongooseConnect');
// const Data = require('../models/dataSchema'); 
const rankData = require('./getCmcRank');

// mongooseConnect();
 
async function btcData() {
  const getCoinID = await rankData();
  for(let i = 0; i < getCoinID.length; i+=1){
    let res = await axios.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${getCoinID[i]}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': '9b58894a-3b84-4ffe-92fc-aade0c49212f',
        },
      },
    );
    let bitcoin = res.data.data[`${getCoinID[i]}`];
    // console.log(bitcoin);
    dataIndexing(bitcoin);
  }
}

btcData();

const dataIndexing = async (bitcoin) => {
  try {
    let coinSymbol = bitcoin.symbol;
    // let coinPrice = Math.floor(bitcoin.quote.USD.price);
    let coinId = bitcoin.id;
    let coinName = bitcoin.name;
    let coinMax_supply = bitcoin.max_supply;
    let coinCirculating_supply = bitcoin.circulating_supply;

    
    const client = await mongoClient.connect();
    const collection = client.db('crypto').collection('Data');
    // await collection.deleteMany({});
    const res = await collection.insertOne({
      ID: coinId,
      SYMBOL: coinSymbol,
      NAME: coinName,
      MAX_SUPPLY: Math.floor(coinMax_supply),
      CIRCULATING_SUPPLY: Math.floor(coinCirculating_supply),
    });
    res ? console.log('전송 성공!') : console.log('전송 실패!');
  } catch (err) {
    console.error('니 코드에 무언가 문제가 있다.', err);
  }
};





