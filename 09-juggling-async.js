let count = 0;
let results = [];
const bl = require('bl');
const http = require('http');

function print() {
	for(let result of results)
		console.log(result)
}

const urls = process.argv.slice(2); // Slices off the first 2 params

function httpGet(index) {
	http.get(urls[index], response => {
		response.pipe(bl((err, data) => {
			if (err)
				return console.error(err);

			results[index] = data.toString();
			count++;

			if (count === urls.length) {
				print();
			}
		}))
	});
}

for(let index in urls) {
	httpGet(index);
}