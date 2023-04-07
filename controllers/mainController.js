
const fetchData = require('./fetchData');
const PopulationData = require('../models/populationSchema');
const mongooseConnect = require('./mongooseConnect');

mongooseConnect();


const datarefreshing = async (req, res) => {
    try {
        const data = await fetchData();
        await PopulationData.deleteMany({});
        await PopulationData.create(data);
        // res.status(200).json('잘 되어감!');
        console.log('잘되어감')
    } catch (err) {
        console.error(err);
        // res.status(500).json('서버 이상!')
    }
}

datarefreshing();

module.exports = {datarefreshing};