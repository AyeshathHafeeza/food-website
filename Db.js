const { Result } = require('express-validator');
const mongoose = require('mongoose');
let uri = `mongodb+srv://saieshsawant70:nayana12@cluster0.jufyd68.mongodb.net/GOFOOD?retryWrites=true&w=majority`


const mongodb = async () => {
  mongoose.connect(uri, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("Connected");
      const fetchdata = await mongoose.connection.db.collection("fooditems");
      fetchdata.find({}).toArray(async function (err, data) {
        // if(err) console.log(err);
        // else {
        //   global.fooditems=data;
        const foodCategory = await mongoose.connection.db.collection("foodcategory");
        foodCategory.find({}).toArray(function (err, catdata) {
          if (err) console.log(err);
          else {
            global.fooditems = data;
            global.foodCategory = catdata;
          }
        })
      }
      )
    }
  })
}

module.exports = mongodb;