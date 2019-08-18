const http = require('http');

const users = ['User 1', 'User 2', 'User 3']

server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Hello Username!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();
    }
    
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><h1>Users</h1><ul>');
        for (user in users){
            res.write('<li>'+users[user]+'</li>');
        }
        res.write('</ul></body>');
        res.write('<html>');
        return res.end();
    }

    if (url === '/create-user' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)
            users.push(message)
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        })
    }

});

server.listen(3000)