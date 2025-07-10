const http = require('http');
const fs = require('fs');

const PORT = 3000;
const FILE_PATH = './db.json';

function readDB() {
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
}

function writeDB(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader('Content-Type', 'application/json');

  if (url === '/age') {
    if (method === 'GET') {
      const data = readDB();
      res.writeHead(200);
      res.end(JSON.stringify({ ages: data.ages }));
    }

    else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const { age } = JSON.parse(body);
        const data = readDB();

        if (!data.ages) {
          data.ages = [];
        }

        data.ages.push({ age });
        writeDB(data);

        res.writeHead(201);
        res.end(JSON.stringify({ message: 'Age added', age }));
      });
    }

    else if (method === 'PUT') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const { index, age } = JSON.parse(body);
        const data = readDB();

        if (Array.isArray(data.ages) && data.ages[index]) {
          data.ages[index].age = age;
          writeDB(data);
          res.writeHead(200);
          res.end(JSON.stringify({ message: 'Age updated', index, age }));
        } else {
          res.writeHead(404);
          res.end(JSON.stringify({ message: 'Invalid index' }));
        }
      });
    }

    else if (method === 'DELETE') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const { index } = JSON.parse(body);
        const data = readDB();

        if (Array.isArray(data.ages) && data.ages[index]) {
          const removed = data.ages.splice(index, 1);
          writeDB(data);
          res.writeHead(200);
          res.end(JSON.stringify({ message: 'Age deleted', removed }));
        } else {
          res.writeHead(404);
          res.end(JSON.stringify({ message: 'Invalid index' }));
        }
      });
    }

    else {
      res.writeHead(405);
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
