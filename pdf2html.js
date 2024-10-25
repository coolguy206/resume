const pdf2html = require('pdf2html')
const fs = require('fs');

pdf2html.html('pdf/source/David-Thanphilom-FED-resume.pdf', (err, html) => {
  if (err) {
    console.error('Conversion error: ' + err)
  } else {
    // console.log(html)

    // write to a new file
    fs.writeFile('html/resume.html', html, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log('html created');
    });

  }
})