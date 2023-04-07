const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async () => {
    try {
      return await axios.get('https://coinness.com/market/ticker');
    } catch (err) {
        console.error(err);
    }
} 

 async function getTableData () {
    const res = await getHtml();
    const dataBundle = cheerio.load(res.data);
    const tableBodySelector =
      '#root > div > div.sc-hOzowv.kzVwjj > div > main > div.sc-JHWBx.hLhVwb > div.sc-gUJyNl.lnzAez > table > tbody';
   dataBundle(tableBodySelector).each((i, el) => {
      const tableRowDatas = dataBundle(el);
    console.log();
    })
    console.log(dataBundle(tableBodySelector).children());
 }

 getTableData();

   