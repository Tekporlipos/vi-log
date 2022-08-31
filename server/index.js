const express = require('express');
const cors = require('cors');
const visitorRouter = require('./visitors/visitorRouter')

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
}

app.use('/visitors', visitorRouter);

app.get("*", (req, res) => {
    res.sendFile('../client/build/index.html');
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
