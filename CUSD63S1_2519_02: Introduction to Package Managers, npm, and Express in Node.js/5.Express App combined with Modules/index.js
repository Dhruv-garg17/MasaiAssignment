// index.js

const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFile } = require('./read');

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

app.get('/readfile', (req, res) => {
  const fileContent = readFile(); 
  res.send(fileContent);
});

app.get('/systemdetails', (req, res) => {
  const systemInfo = {
    platform: os.platform(),  
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB',  
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB', 
    cpuModel: os.cpus()[0].model, 
    cpuCoreCount: os.cpus().length,  
  };
  res.json(systemInfo);
});

app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', (err, address, family) => {
    if (err) {
      res.send('Error fetching IP address: ' + err.message);
    } else {
      res.json({ hostname: 'masaischool.com', ipAddress: address });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
