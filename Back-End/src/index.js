require('./database');
const server = require('./server');

server.listen(server.get('port'));
console.log('Server on port', server.get('port'));