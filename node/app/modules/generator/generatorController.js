// const Product = require("./productModel");
fs = require("fs");

exports.generate = (req, res) => {
  let data = req.body;
  console.log(data)
  fs.writeFile('../react-next-starter/pages/test4.js', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};
