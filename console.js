var fs = require('fs');

console.log('Mode console - Hello francois');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	if (err) throw err;
	console.log('Saved!');
    });