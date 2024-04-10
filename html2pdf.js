var fs = require('fs');
var pdf = require('html-pdf');
var html1 = fs.readFileSync('./html/output/video-resume.html', 'utf8');
var html2 = fs.readFileSync('./html/output/cover-letter.html', 'utf8');
var options = {
  format: 'Letter'
};
/*
pdf.create(html2, options).toFile('./pdf/output/David-Thanphilom-cover-letter.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});


pdf.create(html1, options).toFile('./pdf/output/David-Thanphilom-FED-resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
*/

pdf.create(html1, options).toFile('./pdf/output/David-Thanphilom-video-resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});