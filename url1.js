const url = require('url');
const adr = 'http://localhost:1337/default.htm?&date=20&month=december&year=2019';
const q = url.parse(adr, true);
console.log("Running on" + " " + q.host);
console.log(q.pathname);
console.log(q.search);
const qdata = q.query;
console.log(qdata.date + " " + qdata.month + " " + qdata.year);

