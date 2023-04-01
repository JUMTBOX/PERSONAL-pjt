const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async () => {
    try {
      return await axios.get(
        'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjBC&qvt=0&query=%EC%A0%84%EC%8B%9C%ED%9A%8C',
      );
    } catch (err) {
        console.error(err);
    }
}

  getHtml()
  .then(res =>{
    const response = res.data;
    const $ = cheerio.load(response);
    console.log($('div.area_text_box').text());
  })
  .catch(err => {
    console.error(err);
  })


   


