const express = require("express");
const https = require("https");
const cors = require('cors');

const app = express();

app.use(cors())

const port = 3001;
app.listen(port, () => {
    console.log(`listenning on port ${port} (non dynamic)`);
});

app.get("/test", (reqNode, resNode) => {
    resNode.send({ test: true });
});
