const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
    console.log(`server is running on : ${PORT} `);
});



app.get('/', (req, res) => {
    res.send('Hello World');
});

//send back json data
app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'test@gmail.com',
            age: 30,
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@gmail.com'
        }
    ])
});