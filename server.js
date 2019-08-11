const express = require("express");

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));