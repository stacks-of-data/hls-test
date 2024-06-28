const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'hls')));

app.get('/stream', (req, res) => {
  const playlistPath = path.join(__dirname, 'hls', 'output.m3u8');
  res.sendFile(playlistPath);
});

app.listen(3000, () => console.log('Server listening on port 3000'));
