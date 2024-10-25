var fs = require('fs');
const HTMLtoDOCX = require('html-to-docx');
var html1 = fs.readFileSync('./html/output/resume.html', 'utf8');
var html2 = fs.readFileSync('./html/output/cover-letter.html', 'utf8');

var name = `resume`;
var filePath = `./docx/${name}.docx`;

// console.log(HTMLtoDOCX);
// console.log(html1);


(async () => {

    const fileBuffer = await HTMLtoDOCX(html1, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
    });

    // console.log(fileBuffer);


    fs.writeFile(filePath, fileBuffer, (error) => {
        if (error) {
            console.log('Docx file creation failed');
            console.log(error);
            return;
        }
        console.log('Docx file created successfully');
    });

})();

