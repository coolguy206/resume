var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./html/output/resume.html', 'utf8');
// var html = fs.readFileSync('./html/output/cover-letter.html', 'utf8');
var options = {
  format: 'Letter'
};

// pdf.create(html, options).toFile('./pdf/output/David-Thanphilom-cover-letter.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });

pdf.create(html, options).toFile('./pdf/output/David-Thanphilom-FED-resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});