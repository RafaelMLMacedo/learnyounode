const filterModule = require('./modules/06-make-it-modular-function');

const path = process.argv[2];
const extension = process.argv[3];

filterModule(path, extension, (err, filteredData) => {
	if (err) return console.error(err);

	filteredData.forEach(file => console.log(file));
});