const fs = require('fs');

const path = process.argv[2];
const extension = process.argv[3];

fs.readdir(path, (err, list) => { // list é um array de Strings contendo o nome dos arquivos
	if (err) return console.error(err);

	list.filter(file => {
        const splited = file.split('.');
        return splited[1] === extension;
    }).forEach(file => console.log(file))
});

/*
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
*/