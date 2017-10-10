const fs = require('fs');

module.exports = (path, extension, callback) => {
    fs.readdir(path, (err, data) => {
        if(err) return callback(err);

        let filteredData = data.filter(file => {
            const splitedFile = file.split('.');
            return extension === splitedFile[1];
        });

        return callback(null, filteredData)
    });
};