
/*
 * GET home page.
 */
var jf = require("jsonfile");
var file = "data/data.json";
entries = jf.readFileSync(file);

var getData = function(){
  var x = jf.readFileSync(file);
  return(x)
}

exports.index = function(req, res){
  res.render('index', { title: 'Pastebin', links: getData() });
};

exports.data = function(req, res){
  entries.push(req.body);
  jf.writeFileSync("data/data.json", entries);
  res.redirect('/');
};

