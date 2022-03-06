const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`server is running on : ${PORT} `);
});
//Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
});
