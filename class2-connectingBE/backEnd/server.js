import express from 'express';
import 'dotenv/config'
const app = express();

 app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "id": 1,
          "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          "id": 2,
          "joke": "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!"
        },
        {
          "id": 3,
          "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
          "id": 4,
          "joke": "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
          "id": 5,
          "joke": "I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
          "id": 6,
          "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        }
      ]
      
    res.send(jokes);
});
const port  = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});