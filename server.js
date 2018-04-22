const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello') )


const port = process.env.PORT || 2828
app.listen(port, () => console.log(`Server running on port ${port}`))
